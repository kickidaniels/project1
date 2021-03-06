/* eslint-disable no-console */
import { t } from 'testcafe';
import { acceptCookies, getSiteUrl } from '../../../common/src/util/common';
import enableDebug from '../../../common/src/util/debug';
import setProps from '../../../common/src/util/props';
import { selectProvider, setIBEDummyPaymentBankOn } from '../../../common/src/util/debugOptions';
import {
  selectSeatsForAllSegmentTypes,
  clickSeatMapYes,
  closeSeatMapModal,
} from '../../../common/src/rf_pages/seatMap';
import {
  clickGoToPayment,
  getOrderNumber,
  loadPostBookingLogIn,
} from '../../../common/src/rf_pages/postBookingProduct';
import { addTravelerInformation, bookFlight } from '../../../common/src/rf_pages/travelerDetails';
import { addNoExtraProducts } from '../../../common/src/rf_pages/travelerDetailsProducts';
import {
  closeCartPostBooking,
  logInToPostBooking,
  toggleCartPostBooking,
} from '../../../common/src/rf_pages/postBooking';
import { payWithDummyBank } from '../../../common/src/rf_pages/payment';
import {
  addNumberToTraveler,
  getFirstAdult,
  getSecondAdult,
  getFirstInfant,
} from '../../../common/src/util/travelerData';
import { isDesktop, isMobile, isTablet } from '../../../common/src/util/device';
import seatMapModule from '../../../common/src/rf_modules/seatMapModule';
import postbookingModule from '../../../common/src/rf_modules/postbookingModule';
import { closeHeaderUrgencyBanner, searchAndSelectTrip } from '../../../common/src/rf_pages/start';
import config from './testdata.json';

const url = getSiteUrl('supersaver-se', config.host);
let travelers = addNumberToTraveler([getFirstAdult(), getSecondAdult()]);
const props = {
  'IbeClient.TravelerDetails.Modal': 'SEATMAP',
  'IbeClient.SeatMap.Segment.Navigation.Manual.Enabled': true,
  'IbeClient.SeatMap.Footer.CancelButton.Disabled': true,
  'IbeClient.SearchResult.Flex.Behaviour': 'BUTTON',
  'Payment.ForceShowAddressFields.Carriers': '',
  'Payment.RemoveAdressForBank.Enable': false,
};

fixture('Seat Map Postbooking verification')
  .page(url)
  .beforeEach(async () => {
    await enableDebug();
    await acceptCookies();
    await setIBEDummyPaymentBankOn();
    await selectProvider('IbeGDSDummy');
    await setProps(props);
    await closeHeaderUrgencyBanner();
  });

test('SeatMap book seating light and beside', async () => {
  travelers = addNumberToTraveler([getFirstAdult(), getFirstInfant()]);
  const seatingComboProps = {
    'Product.SeatMap.SeatingCombo.Enable': true,
  };
  const numberOfAdults = 1;
  const numberOfInfants = 1;
  await setProps(seatingComboProps);
  await searchAndSelectTrip(
    numberOfAdults,
    0,
    numberOfInfants,
    'return trip',
    'GOT',
    'BKK',
    'ECONOMY',
    [11, 24],
  );
  await addTravelerInformation(travelers);
  await addNoExtraProducts(numberOfAdults);
  await bookFlight();
  if (await seatMapModule.seatMapContent.exists) {
    await closeSeatMapModal();
  }
  await payWithDummyBank();
  const orderModuleNumber = await getOrderNumber();
  const postBookingUrl = getSiteUrl('postbooking-supersaver-se', config.host);
  await loadPostBookingLogIn(postBookingUrl);
  await logInToPostBooking(travelers[0].email, orderModuleNumber);
  await t.expect(postbookingModule.cartOpenProductsButton.exists).notOk();
  await clickSeatMapYes();
  await selectSeatsForAllSegmentTypes();
  await t.click(seatMapModule.saveAndContinueButton).click(seatMapModule.saveAndContinueButton);
  if (await isDesktop()) {
    await t.expect(postbookingModule.cartSeatMapIcon.exists).ok();
  }
  if ((await isMobile()) || (await isTablet())) {
    await toggleCartPostBooking();
    await t.expect(postbookingModule.cartSeatMapIcon.exists).ok();
    await closeCartPostBooking();
  }
  await clickGoToPayment();
  await payWithDummyBank();
});

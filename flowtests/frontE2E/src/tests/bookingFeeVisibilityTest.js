import { t } from 'testcafe';
import enableDebug from '../../../common/src/util/debug';
import { acceptCookies, getSiteUrl } from '../../../common/src/util/common';
import { selectProvider } from '../../../common/src/util/debugOptions';
import setProps from '../../../common/src/util/props';
import {
  closeHeaderUrgencyBanner,
  makeSearch,
  selectTravelers,
} from '../../../common/src/rf_pages/start';
import config from '../../testdata.json';
import {
  addNumberToTraveler,
  getFirstAdult,
  getSecondAdult,
} from '../../../common/src/util/travelerData';
import debugModule from '../../../common/src/rf_modules/debugModule';
import { dropdownSelect } from '../../../common/src/util/dropdownSelect';
import resultModule from '../../../common/src/rf_modules/resultModule';
import { selectTripButtonByIndex } from '../../../common/src/rf_pages/result';
import travelerDetailsModule from '../../../common/src/rf_modules/travelerDetailsModule';
import { addTravelerInformation, bookFlight } from '../../../common/src/rf_pages/travelerDetails';
import { addNoExtraProducts } from '../../../common/src/rf_pages/travelerDetailsProducts';
import { closeSeatMapModal } from '../../../common/src/rf_pages/seatMap';
import paymentModule from '../../../common/src/rf_modules/paymentModule';
import { isDesktop, isMobile, isTablet } from '../../../common/src/util/device';
import {
  addCheckoutData,
  openCartIfClosed,
  payWithCreditCard,
} from '../../../common/src/rf_pages/payment';
import { waitForOrderPageToLoad } from '../../../common/src/rf_pages/order';
import orderModule from '../../../common/src/rf_modules/orderModule';

const url = getSiteUrl('gotogate-uk', config.host);
const travelers = addNumberToTraveler([getFirstAdult(), getSecondAdult()]);

const numberOfAdults = 2;
const props = {
  'IbeClient.TravelerDetails.Modal': 'SEATMAP',
  'IbeClient.SeatMap.Segment.Navigation.Manual.Enabled': true,
  'IbeClient.SeatMap.Footer.CancelButton.Disabled': true,
};

async function filterTrip(carrier, selector) {
  await t.click(debugModule.debugFilterButton);
  await t.expect(debugModule.searchCarrierDropdown.visible).ok();
  await dropdownSelect(debugModule.searchCarrierDropdown, carrier);
  await t.click(debugModule.debugFilterCloseButton);
  await t.click(resultModule.toggleFilterButton);
  if ((await isMobile()) || (await isTablet())) {
    await t.click(resultModule.filterAirlineToggleButton);
  }
  await t.click(resultModule.clearAirlines);
  await t.click(selector);
}

// This test will be activated when WEB-5145 is solved and released
fixture
  .skip('Booking fee visibility for different carriers')
  .page(url)
  .beforeEach(async () => {
    await enableDebug();
    await acceptCookies();
    // await setIBEDummyPaymentBankOn();
    await selectProvider('IbeGDSDummy');
    await setProps(props);
    await closeHeaderUrgencyBanner();
  });

test('Booking fee visible for Air France', async () => {
  await selectTravelers(numberOfAdults);
  await makeSearch('return trip', 'Stockholm', 'Paris', [11, 24]);
  await filterTrip('Air France', resultModule.filterAirlineAirFranceCheckbox);
  await selectTripButtonByIndex(0);

  // Verify on traveler details page
  if ((await isMobile()) || (await isTablet())) {
    await t.click(travelerDetailsModule.cartToggleButtonMobile);
    await t.click(travelerDetailsModule.cartTravelerToggleButton);

    await t.expect(travelerDetailsModule.cartPassengersMobile.innerText).contains('Booking fee');

    await t.click(travelerDetailsModule.cartToggleButtonMobile);
  }
  if (await isDesktop()) {
    await t.click(travelerDetailsModule.cartTravelerToggleButton);

    await t.expect(travelerDetailsModule.cartPassengers.innerText).contains('Booking fee');
  }

  await addTravelerInformation(travelers);
  await addNoExtraProducts(numberOfAdults);
  await bookFlight();
  await closeSeatMapModal();
  // Verify on payment page
  await openCartIfClosed();
  if ((await isMobile()) || (await isTablet())) {
    await t.click(paymentModule.cartToggleButtonMobile);
    await t.click(paymentModule.cartTravelerInfoButton);

    await t.expect(paymentModule.cartTravelerInfoMobile.innerText).contains('Booking fee');

    await t.click(paymentModule.cartToggleButtonMobile);
  }
  if (await isDesktop()) {
    await t.click(paymentModule.cartTravelerInfoButton);

    await t.expect(paymentModule.cartPriceInfo.innerText).contains('Booking fee');
  }
  await payWithCreditCard();
  await addCheckoutData();
  // Verify on order page
  await waitForOrderPageToLoad();
  await t.expect(orderModule.travelerPriceInfo.innerText).contains('Booking fee');
});

test('Booking fee not visible for Spirit airlines', async () => {
  await selectTravelers(numberOfAdults);
  await makeSearch('one way trip', 'New York', 'Michigan city', [11, 24]);
  await filterTrip('Spirit Airlines', resultModule.filterAirlineSpiritAirlinesCheckbox);
  await selectTripButtonByIndex(0);

  // Verify on traveler details page
  if ((await isMobile()) || (await isTablet())) {
    await t.click(travelerDetailsModule.cartToggleButtonMobile);
    await t.click(travelerDetailsModule.cartTravelerToggleButton);

    await t.expect(travelerDetailsModule.cartMarkupPriceMobile.visible).notOk({ timeout: 600 });

    await t.click(travelerDetailsModule.cartToggleButtonMobile);
  }
  if (await isDesktop()) {
    await t.click(travelerDetailsModule.cartTravelerToggleButton);

    await t.expect(travelerDetailsModule.cartMarkupPrice.visible).notOk({ timeout: 600 });
  }

  await addTravelerInformation(travelers);
  await addNoExtraProducts(numberOfAdults);
  await bookFlight();
  await closeSeatMapModal();

  // Verify on payment page
  await openCartIfClosed();
  if ((await isMobile()) || (await isTablet())) {
    await t.click(paymentModule.cartToggleButtonMobile);
    await t.click(paymentModule.cartTravelerInfoButton);

    await t.expect(paymentModule.cartMarkupPriceMobile.visible).notOk({ timeout: 600 });

    await t.click(paymentModule.cartToggleButtonMobile);
  }
  if (await isDesktop()) {
    await t.click(paymentModule.cartTravelerInfoButton);

    await t.expect(paymentModule.cartMarkupPrice.visible).notOk({ timeout: 600 });
  }
  await payWithCreditCard();
  await addCheckoutData();

  // Verify on order page
  await waitForOrderPageToLoad();
  await t.expect(orderModule.markupPrice.visible).notOk({ timeout: 600 });
});
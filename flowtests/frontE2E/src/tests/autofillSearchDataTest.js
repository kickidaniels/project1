import { t } from 'testcafe';
import { acceptCookies, getSiteUrl } from '../../../common/src/util/common';
import config from '../../testdata.json';
import enableDebug from '../../../common/src/util/debug';
import { selectProvider, setIBEDummyPaymentBankOn } from '../../../common/src/util/debugOptions';
import setProps from '../../../common/src/util/props';
import { closeHeaderUrgencyBanner, searchTrip } from '../../../common/src/rf_pages/start';
import headerModule from '../../../common/src/rf_modules/headerModule';
import startModule from '../../../common/src/rf_modules/startModule';
import { addSearchDataResultPage } from '../../../common/src/rf_pages/result';
import resultModule from '../../../common/src/rf_modules/resultModule';

const url = getSiteUrl('gotogate-uk', config.host);
const props = {
  'IbeClient.TravelerDetails.Modal': 'SEATMAP',
  'IbeClient.SeatMap.Segment.Navigation.Manual.Enabled': true,
  'IbeClient.SeatMap.Footer.CancelButton.Disabled': true,
  'IbeClient.DisplayProgressSteps.Enabled': false,
};

fixture('Autofill search data on start page')
  .page(url)
  .beforeEach(async () => {
    await enableDebug();
    await acceptCookies();
    await setIBEDummyPaymentBankOn();
    await selectProvider('IbeGDSDummy');
    await setProps(props);
    await closeHeaderUrgencyBanner();
  });

test('Autofill search data on start page', async () => {
  await searchTrip(1, 0, 0, 'return trip', 'STO', 'BER', 'ECONOMY', [11, 24]);
  await t.expect(resultModule.resultPage.visible).ok();
  await t.click(headerModule.logoHeader);

  await t
    .expect(startModule.startPageSearchForm.visible)
    .ok()
    .expect(startModule.origin.innerText)
    .contains('Stockholm')
    .expect(startModule.destination.innerText)
    .contains('Berlin')
    .expect(startModule.travelerDropDown.innerText)
    .contains('1 adult')
    .expect(startModule.cabinClassDropdown.innerText)
    .contains('Economy');

  await t.click(startModule.searchFlight);
  await addSearchDataResultPage(1, 'GOT', 'PAR', 1, 1);
  await t.click(resultModule.searchFlight);
  await t.click(headerModule.logoHeader);

  await t
    .expect(startModule.startPageSearchForm.visible)
    .ok()
    .expect(startModule.origin.innerText)
    .contains('Gothenburg')
    .expect(startModule.destination.innerText)
    .contains('Paris')
    .expect(startModule.travelerDropDown.innerText)
    .contains('2 adults, 1 child, 1 infant')
    .expect(startModule.cabinClassDropdown.innerText)
    .contains('Premium class');
});

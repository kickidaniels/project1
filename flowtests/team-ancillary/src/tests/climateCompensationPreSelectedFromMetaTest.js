/* eslint-disable no-console */
import { t } from 'testcafe';
import { getSiteUrl } from '../../../common/src/util/common';
import enableDebug from '../../../common/src/util/debug';
import setProps from '../../../common/src/util/props';
import { getTrip } from '../util/metaTrips';
import travelerModule from '../../../common/src/rf_modules/travelerDetailsModule';
import resultModule from '../../../common/src/rf_modules/resultModule';
import { selectTripButtonByIndex } from '../../../common/src/rf_pages/result';
import config from './testdata.json';

const url = getSiteUrl('SE-meta', config.host);
const props = {
  'Feature.NewResponsive.Enabled': true,
  'IbeClient.SearchResult.Flex.Behaviour': 'BUTTON',
};

fixture('Climate compensation preselected from meta')
  .page(url)
  .beforeEach(async () => {
    const offerUrl = await getTrip(url);
    console.log(`offerUrl: ${offerUrl}`);
    await enableDebug(false);
    await setProps(props);
    await t.navigateTo(
      `${offerUrl}&climateCompensated=1&message=j9H8uMBbD%2FKqSnqvz0siKrIxPJQHkWSm%2BT6xF%2Fw0mbJs7j8uNov9OICNaUGjgDY1&messageIv=AltHJre%2BXhwhE9qn%2BZgbSQ%3D%3D`,
    );
  });

test('Climate compensation preselected from meta added to cart on traveler details', async () => {
  await t.expect(resultModule.searchForm.exists).ok('', { timeout: 50000 });
  await selectTripButtonByIndex(0);

  await t.expect(travelerModule.travelerDetailsForm.exists).ok('', { timeout: 50000 });
  await t.expect(travelerModule.climateCompensatedIcon.exists).ok();
});

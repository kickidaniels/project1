import { Selector } from 'testcafe';

export default {
  bookFlightButton: Selector('[data-testid="resultPage-book-button"]'),
  bookFlightWithFlexibleTicketButton: Selector('[data-testid="resultPage-book-button"]').nth(1),
  cabinClassDropdown: Selector('[data-testid="searchForm-cabinClasses-dropdown"]'),
  cheapestFilterButton: Selector('[data-testid="result-quick-sort-button"]').nth(2),
  clearAirlines: Selector(
    '[data-testid="resultPage-AIRLINESFilter-content"] > div > span:nth-child(1)',
  ),
  date: Selector('[aria-disabled="false"]'),
  destinationInput: Selector('[data-testid="searchForm-singleBound-destination-input"]'),
  departureDate: Selector('[data-testid="singleBound.departureDate-input"]'),
  filterAirlineAirFranceCheckbox: Selector('[for="airlines-AF"]'),
  filterAirlineLufthansaCheckbox: Selector('[for="airlines-LH"]'),
  filterAirlineSpiritAirlinesCheckbox: Selector('[for="airlines-NK"]'),
  filterAirlineSasCheckbox: Selector('[for="airlines-SK"]'),
  filterAirlineTurkishCheckbox: Selector('[for="airlines-TK"]'),
  filterAirlineToggleButton: Selector(
    '[data-testid="resultPage-filterHeader-AIRLINESToggleButton-button"]',
  ),
  filterAllButton: Selector('[data-testid="MAX_STOPS-all"]'),
  filterArrivalSecondBoundRadioButton: Selector(
    '[data-testid="resultPage-departureArrivalFilter-arrival1-radio"]',
  ),
  filterArrivalSecondBoundRightSlider: Selector(
    '[data-testid="resultPage-departureArrivalFilter-arrival1-slider"] [data-testid="handle-1"]',
  ),
  filterArrivalTimeSecondBound: Selector(
    '[data-testid="resultPage-departureArrivalFilter-arrival1-slider"] .slider-tracks',
  ),
  filterDepArrFirstBoundToggleButton: Selector(
    '[data-testid="resultPage-filterHeader-departureArrival0ToggleButton-button"]',
  ),
  filterDepArrSecondBoundToggleButton: Selector(
    '[data-testid="resultPage-filterHeader-departureArrival1ToggleButton-button"]',
  ),
  filterDepartureTimeFirstBound: Selector(
    '[data-testid="resultPage-departureArrivalFilter-departure0-slider"] .slider-tracks',
  ),
  filterDepartureFirstBoundLeftSlider: Selector(
    '[data-testid="resultPage-departureArrivalFilter-departure0-slider"] [data-testid="handle-0"]',
  ),
  filterDirectButton: Selector('[data-testid="MAX_STOPS-direct"]'),
  filterMaxOneStopButton: Selector('[data-testid="MAX_STOPS-max1"]'),
  filterMaxStopToggleButton: Selector(
    '[data-testid="resultPage-filterHeader-MAX_STOPSToggleButton-button"]',
  ),
  filterPriceMaxLabel: Selector('[data-testid="resultPage-PRICEFilter-content"] div').nth(9),
  filterPriceSliderRight: Selector(
    '[data-testid="resultPage-PRICEFilter-content"] [data-testid="handle-1"]',
  ),
  filterPriceToggleButton: Selector(
    '[data-testid="resultPage-filterHeader-PRICEToggleButton-button"]',
  ),
  filterResetButton: Selector(
    '[data-testid="resultPage-filterHeader-allFilterResetButton-button"]',
  ),
  filterTravelTimeSlider: Selector(
    '[data-testid="resultPage-TRAVEL_TIMEFilter-content"] [data-testid="handle-0"]',
  ),
  filterTravelTimeToggleButton: Selector(
    '[data-testid="resultPage-filterHeader-TRAVEL_TIMEToggleButton-button"]',
  ),
  firstBoundPlaneIcon: Selector(
    '.resultPage-flightResults-0 [data-testid="tripDetails-bound"]:nth-child(1) [data-testid="tripDetails-bound-plane-icon"]',
  ),
  freeCancellation: Selector('[data-testid="freeCancellationInformation-search-result"]'),
  freeCancellationDaysAheadText: Selector(
    '[data-testid="freeCancellationInformationDaysAhead-search-result"]',
  ),
  nextMonth: Selector('[data-testid="searchForm-nextMonth-input"]'),
  originInput: Selector('[data-testid="searchForm-singleBound-origin-input"]'),
  owcInformation: Selector('[data-testid="tripDetails-oneWayCombination-wrapper"]'),
  priceInfoButton: Selector('[data-testid="result-trip-price-info-button"]'),
  priceInfoCloseButton: Selector('[data-testid="etiModal-close"]'),
  priceInformationModal: Selector('[data-testid="traveler-price-info"]'),
  productBundleOption3: Selector('[data-testid="productBundleItem-3"]'),
  productBundleOption3Button: Selector('[for="choice.flexibleTicketBundle.3"]'),
  productBundleConfirmationButton: Selector(
    '[data-testid="productBundle-flexibleTicketBundle-confirmation-button"]',
  ),
  resultPage: Selector('[data-testid="resultPage-searchResults"]'),
  returnDate: Selector('[data-testid="singleBound.returnDate-input"]'),
  searchFlight: Selector('[data-testid="searchForm-searchFlights-button"]'),
  searchForm: Selector('[data-testid="resultPage-searchForm-content"]'),
  searchFormButton: Selector('[data-testid="resultPage-searchHeaderButton-button"]'),
  secondBoundTrainIcon: Selector(
    '.resultPage-flightResults-0 [data-testid="tripDetails-bound"]:nth-child(2) [data-testid="tripDetails-bound-train-icon"]',
  ),
  selfTransferText: Selector(
    '[data-testid*="resultPage-resultTrip-"] [data-testid="self-transfer-content"]',
  ),
  selfTransferTrip: Selector(
    '[data-testid*="resultPage-resultTrip-"] [data-testid="self-transfer-header"]',
  ),
  shortestFilterButton: Selector('[data-testid="result-quick-sort-button"]').nth(3),
  stepIndicatorCurrent: Selector('[data-testid="current-step"]'),
  stepIndicatorNotVisited: Selector('[data-testid="not-visited-step"]'),
  stepIndicatorVisited: Selector('[data-testid="visited-step"]'),
  timeStampSegmentDestination: Selector('[data-testid="trip-segment-destination-time"]'),
  timeStampSegmentOrigin: Selector('[data-testid="trip-segment-origin-time"]'),
  toggleFilterButton: Selector('[data-testid="resultPage-toggleFiltersButton-button"]'),
  toggleTrip: tripNumber => `[data-testid="resultPage-resultTrip-${tripNumber}-wrapper"]`,
  topTripHeader: Selector('[data-testid="result-tripHeader-title"]'),
  trainSegmentIcon: Selector(
    '.resultPage-flightResults-0 [data-testid="tripDetails-bound"]:nth-child(2) [data-testid="tripDetails-segment-train"] svg',
  ),
  travelerAdultsCounterPlus: Selector('[data-testid="adults-option"] .etiCounter__button--plus'),
  travelerChildrenCounterPlus: Selector(
    '[data-testid="children-option"] .etiCounter__button--plus',
  ),
  travelerDropDown: Selector('[data-testid="searchForm-passengers-dropdown"]'),
  travelerInfantsCounterPlus: Selector('[data-testid="infants-option"] .etiCounter__button--plus'),
  travelTimeDuration: Selector('[data-testid="searchResults-segment-duration"]'),
  tripBounds: tripNumber =>
    Selector(
      `[data-testid="resultPage-resultTrip-${tripNumber}-wrapper"] [data-testid="tripDetails-bound"]`,
    ),
  tripChange: Selector('[data-testid="searchResults-segment-stops"]'),
  tripDetailBound: Selector('[data-testid="tripDetails-bound"]'),
  tripPriceFlex: Selector('[data-testid="result-trip-price-flex"]'),
  tripPriceStandard: Selector('[data-testid="result-trip-price-standard"]'),
  tripSegment: Selector('[data-testid="tripDetails-segment"]'),
  tripSegments: tripNumber =>
    Selector(
      `[data-testid="resultPage-resultTrip-${tripNumber}-wrapper"] [data-testid="tripDetails-segment"]`,
    ),
  tripTitleDate: Selector('[data-testid="tripDetails-title-date-desktop"]'),
  tripTitleDateMobile: Selector('[data-testid="tripDetails-title-date-mobile"]'),
  tripTitleFlight: Selector('[data-testid="tripDetails-title-TitleText"]'),
  tripTitleFlightCity: number =>
    Selector('[data-testid="tripDetails-title-TitleText"] span').nth(number),
  tripTitleTravelerInfo: Selector('[data-testid="tripDetails-title-travelers-desktop"]'),
  tripTitleTravelerInfoMobile: Selector('[data-testid="tripDetails-title-travelers-mobile"]'),
  voucherFlexPrice: Selector('[data-testid="result-trip-discounted-price-flex"]'),
  voucherStandardPrice: Selector('[data-testid="result-trip-discounted-price-standard"]'),
  voucherSwitch: Selector('[data-testid="slider-valid-with-voucher-switch"]'),
};

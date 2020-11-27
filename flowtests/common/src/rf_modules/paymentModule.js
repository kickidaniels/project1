import { Selector } from 'testcafe';

export default {
  bankAddressFieldContainer: Selector(
    '[data-testid="paymentPage-bankPaymentForm-addressFieldsContainer"]',
  ),
  bankFee: Selector('[data-testid="payment-paymentMethodFee-label-BANK"]'),
  bankLabel: Selector('[for="BANK"]'),
  bankFirstNameInput: Selector('[data-testid="bank-payment-form"] [data-testid="firstName-input"]'),
  bankLastNameInput: Selector('[data-testid="bank-payment-form"] [data-testid="lastName-input"]'),
  bankStreetInput: Selector('[data-testid="bank-payment-form"] [data-testid="street-input"]'),
  bankZipCodeInput: Selector('[data-testid="bank-payment-form"] [data-testid="zipCode-input"]'),
  bankCityInput: Selector('[data-testid="bank-payment-form"] [data-testid="city-input"]'),
  cabinClassInfo: Selector('[data-testid="tripDetails-segment-cabinClass"]'),
  cardFee: Selector('[data-testid="payment-paymentMethodFee-label-CARD"]'),
  cardVisa: Selector('[data-testid="payment-credit-cards"]').nth(0),
  cardVisaDebit: Selector('[data-testid="payment-credit-cards"]').nth(1),
  cardVisaElectron: Selector('[data-testid="payment-credit-cards"]').nth(2),
  cardMasterCard: Selector('[data-testid="payment-credit-cards"]').nth(3),
  cardMaestro: Selector('[data-testid="payment-credit-cards"]').nth(4),
  cardDebit: Selector('[data-testid="payment-credit-cards"]').nth(5),
  cardAmericanExpress: Selector('[data-testid="payment-credit-cards"]').nth(6),
  cardPaymentForm: Selector('[data-testid="card-payment-form"]'),
  cardRadioButtonVisa: Selector('[data-testid="VISACreditCard-input"]'),
  cardRadioButtonVisaDebit: Selector('[data-testid="VISA DebitCreditCard-input"]'),
  cardRadioButtonVisaElectron: Selector('[data-testid="VISA ElectronCreditCard-input"]'),
  cardRadioButtonMasterCard: Selector('[data-testid="MASTERCARDCreditCard-input"]'),
  cardRadioButtonMaestro: Selector('[data-testid="MAESTROCreditCard-input"]'),
  cardRadioButtonDebit: Selector('[data-testid="MASTERCARD DebitCreditCard-input"]'),
  cardRadioButtonAmericaExpress: Selector('[data-testid="AMERICAN EXPRESSCreditCard-input"]'),
  cardLabel: Selector('[for="CARD"]'),
  cardNumberInput: Selector('[data-testid="card-payment-form"] [data-testid="cardnumber-input"]'),
  cardExpInput: Selector('[data-testid="card-payment-form"] [data-testid="cc-exp-input"]'),
  cardCvcInput: Selector('[data-testid="card-payment-form"] [data-testid="cvc-input"]'),
  cardFirstNameInput: Selector('[data-testid="card-payment-form"] [data-testid="firstName-input"]'),
  cardLastNameInput: Selector('[data-testid="card-payment-form"] [data-testid="lastName-input"]'),
  cardInfoText: Selector('.etiNotification').nth(0),
  cartDiscountInformation: Selector('[data-testid="cart-payment-price"]'),
  cardLogo: Selector('[data-testid="paymentMethodLogo-card"]'),
  cartPrice: Selector('[data-testid="cart-totalPrice-span"]'),
  cartPriceMobile: Selector('[data-testid="cart-totalPrice-span-drawer"]'),
  cartCardFeeText: Selector('[data-testid="cart-payment-price"]'),
  cartCheckInBaggageProduct: Selector('[data-testid="cart-product-checkInBaggage"]'),
  cartCheckInBaggageProductMobile: Selector('[data-testid="cart-product-checkInBaggage-drawer"]'),
  cartSupportPackageProduct: Selector('[data-testid="cart-product-servicePackage"]'),
  cartCheckInProduct: Selector('[data-testid="cart-product-onlineCheckIn"]'),
  cartMobileTravelPlanProduct: Selector('[data-testid="cart-product-mobileTravelPlan"]'),
  cartSmsProduct: Selector('[data-testid="cart-product-sms"]'),
  cartContentContent: Selector('[data-testid="cart-content-Content"]'),
  cartDiscountCode: Selector('[data-testid="cart-payment-discount-price"]'),
  cartCancellationInsideEuProduct: Selector('[data-testid="cart-product-cancellationInsideEu"]'),
  cartCancellationInsideEuProductMobile: Selector(
    '[data-testid="cart-product-cancellationInsideEu-drawer"]',
  ),
  cartExtraProductsContent: Selector('[data-testid="cart-content-products"]'),
  cartExtraProductsContentMobile: Selector('[data-testid="cart-content-products-drawer"]'),
  cartFlexTicketProduct: Selector('[data-testid="cart-product-flexibleTicket"]'),
  cartFlexTicketProductMobile: Selector('[data-testid="cart-product-flexibleTicket-drawer"]'),
  cartFlightContent: Selector('[data-testid="cart-content-Content"] div.etiCartItem'),
  cartFlightContentMobile: Selector('[data-testid="cart-content-Trip-drawer"] div'),
  cartOnlineCheckinProduct: Selector('[data-testid="cart-product-onlineCheckIn"]'),
  cartSeatMapProduct: Selector('[data-testid="cart-product-seatMap"]'),
  cartSeatMapProductMobile: Selector('[data-testid="cart-product-seatMap-drawer"]'),
  cartTagIcon: Selector('[data-testId="cart-tag-icon"]'),
  cartTripCancellationProduct: Selector('[data-testid="cart-product-tripCancellationProtection"]'),
  cartTripCancellationPrice: Selector(
    '[data-testid="cart-product-tripCancellationProtection-price"]',
  ),
  cartAllInclusiveProduct: Selector('[data-testid="cart-product-allInclusiveProtection"]'),
  cartAllInclusivePrice: Selector('[data-testid="cart-product-allInclusiveProtection-price"]'),
  cartCancellationWithinEuProductPrice: Selector('[data-testid="cart-product-cancellationInsideEu-price"]'),
  cartCancellationOutsideEuProductPrice: Selector('[data-testid="cart-product-cancellationOutsideEu-price"]'),
  cartTrips: Selector('[data-testid="cart-content-Trips"]'),
  cartTripsMobile: Selector('[data-testid="cart-content-Trips-drawer"]'),
  cartTrip: Selector('[data-testid="cart-content-Trip"] div'),
  cartTripMobile: Selector('[data-testid="cart-content-Trip-drawer"] div'),
  cartTravelerinfo: Selector('[data-testid="cart-travelerInfo-CartTravelers"]'),
  cartTravelerInfoMobile: Selector('[data-testid="cart-travelerInfo-CartTravelers-drawer"]'),
  cartTravelerInfoButton: Selector('[data-testid="cart-travelerInfoToggleButton-button"]'),
  cartToggleButtonMobile: Selector('[data-testid="cart-cartButton-button"]'),
  checkoutIFrame: Selector('[name="cko-3ds2-iframe"]'),
  checkoutPassword: Selector('#password'),
  checkoutContinueButton: Selector('#txtButton'),
  checkPaymentConditions: Selector('[data-testid="payment-conditions-input"]'),
  checkinBaggagePrice: Selector('[data-testid="cart-product-checkInBaggage-price"]'),
  checkinBaggagePriceMobile: Selector('[data-testid="cart-product-checkInBaggage-price-drawer"]'),
  checkInBaggageIcon: Selector('[data-testid="checkInBaggage-ProductIcon"]'),
  discountCodeButton: Selector('[data-testid="discount-code-button"]'),
  discountCodeError: Selector('[data-testid="discount-code-error"]'),
  discountCodeInput: Selector('[data-testid="discount-code-input"]'),
  discountCodePriceBox: Selector('[data-testid="payment-bottomContent-priceSummary-discount"]'),
  discountCodeRemoveButton: Selector('[data-testid="discount-code-remove-button"]'),
  discountCodeSuccess: Selector('[data-testid="discount-code-success"]'),
  discountCodeToggleInput: Selector('[data-testid="discount-form-toggle"]'),
  firstBoundPlaneIcon: Selector(
    '[data-testid="tripDetails-bound"]:nth-child(1) [data-testid="tripDetails-bound-plane-icon"]',
  ),
  ibeDummyBankRadioButton: Selector('fieldset .etiCustomRadio'),
  klarnaLogo: Selector('[data-testid="paymentMethodLogo-klarna"]'),
  klarnaSliceFee: Selector('[data-testid="payment-paymentMethodFee-label-KlarnaSliceIt"]'),
  klarnaSliceLabel: Selector('[for="KlarnaSliceIt"]'),
  klarnaSliceRadiobutton: Selector('[for="KlarnaSliceIt"] [data-testid="payment-method-input"]'),
  klarnaPayLaterFee: Selector('[data-testid="payment-paymentMethodFee-label-KlarnaPayLater"]'),
  klarnaPayLaterLabel: Selector('[for="KlarnaPayLater"]'),
  klarnaPayLaterRadiobutton: Selector(
    '[for="KlarnaPayLater"] [data-testid="payment-method-input"]',
  ),
  owcInformation: Selector('[data-testid="tripDetails-oneWayCombination-wrapper"]'),
  payFirstNameInput: Selector('[data-testid="firstName-input"]'),
  payLastNameInput: Selector('[data-testid="lastName-input"]'),
  payStreetInput: Selector('[data-testid="street-input"]'),
  payZipCodeInput: Selector('[data-testid="zipCode-input"]'),
  payCityInput: Selector('[data-testid="city-input"]'),
  payButton: Selector('[data-testid="payment-pay-button"]'),
  paymentContainer: Selector('[data-testid="paymentPage-paymentMethodsAndCart-container"]'),
  priceChangeModal: Selector('.ReactModal__Content.ReactModal__Content--after-open.etiModal'),
  priceChangeYesButton: Selector(
    '.ReactModal__Content.ReactModal__Content--after-open button:nth-child(1)',
  ),
  selfTransferInformationText: Selector('[data-testid="paymentPage-self-transfer-guarantee"]'),
  selfTransferHeader: Selector('[data-testid="self-transfer-header"]'),
  selfTransferText: Selector('[data-testid="self-transfer-content"]'),
  seatMapIcon: Selector('[data-testid="seatMap-ProductIcon"]'),
  shortConnectionNotification: Selector('[data-testid="short-connection-time-notification"]'),
  smallIcons: Selector('[data-testid="expansion-panel-flight"] svg'),
  supportPremiumIcon: Selector('[data-testid="servicePackage-ProductIcon"]'),
  secondBoundTrainIcon: Selector(
    '[data-testid="tripDetails-bound"]:nth-child(2) [data-testid="tripDetails-bound-train-icon"]',
  ),
  trainSegmentIcon: Selector(
    '[data-testid="tripDetails-bound"]:nth-child(2) [data-testid="tripDetails-segment-train"] svg',
  ),
  travelerDetailsToggleButton: Selector('[data-testid="expansion-panel-travelers"]'),
  travelerDetailsEmail: Selector('[data-testid="traveler-email"]'),
  travelerDetailsPhone: Selector('[data-testid="traveler-phone"]'),
  travelerDetailsName: Selector('[data-testid="traveler-name"]'),
  travelerDetailsAge: Selector('[data-testid="traveler-ageType"]'),
  travelerContainer: Selector('[data-testid="paymentPage-travelerList-container"]'),
  tripHeaderFlight: Selector('[data-testid="tripDetails-title-TitleText"]'),
  tripHeaderTravelers: Selector('[data-testid="tripDetails-title-travelers-desktop"]'),
  tripDetailsToggleButton: Selector('[data-testid="expansion-panel-flight"]'),
  tripInfoText: Selector('[data-testid="tripDetails-segment-event"]'),
  tripSegment: Selector('[data-testid="tripDetails-segment"]'),
  tripBound: Selector('[data-testid="tripDetails-bound"]'),
  tripSegmentFlightNr: Selector('[data-testid="tripDetails-segment-TripDetailsSegmentInfo"]'),
  toggleCartButton: Selector('[data-testid="cart-toggleButton-button"]'),
  tripSegFirstOrigin: Selector('[data-testid="trip-segment-origin-time"]')
    .nth(0)
    .nextSibling(),
  tripSegSecondOrigin: Selector('[data-testid="trip-segment-origin-time"]')
    .nth(1)
    .nextSibling(),
  tripSegFirstDestination: Selector('[data-testid="trip-segment-destination-time"]')
    .nth(0)
    .nextSibling(),
  tripSegSecondDestination: Selector('[data-testid="trip-segment-destination-time"]')
    .nth(1)
    .nextSibling(),
  trustlyLogo: Selector('[data-testid="paymentMethodLogo-trustly"]'),
  voucherNotValidInfo: Selector('[data-testid="payment-page-voucherNotValid"]'),
};

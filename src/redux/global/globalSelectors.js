const getIsLogoutOpen = state => state.global.isLogoutOpen;

const getIsVerifyNotifOpen = state => state.global.isVerifyNotifOpen;

const getIsAuthFormOpen = state => state.global.isAuthFormOpen;

const getHasGifts = state => state.global.hasGifts;

const getShowNavPage = state => state.global.showNavPage;

const getIsModalOpen = state => state.global.isModalOpen;

const getShowLoginForm = state => state.global.showLogin;

const getShowExpensesPage = state => state.global.showExpensesPage;

const getIsCalculatorOpen = state => state.global.isCalculatorOpen;

const getIsExpenseBtnActive = state => state.global.isExpenseBtnActive;
const getChartDate = state => state.global.chartDate;

export default {
  getIsLogoutOpen,
  getIsVerifyNotifOpen,
  getIsAuthFormOpen,
  getHasGifts,
  getShowExpensesPage,
  getShowNavPage,
  getIsModalOpen,
  getShowLoginForm,
  getIsCalculatorOpen,
  getIsExpenseBtnActive,
  getChartDate,
};

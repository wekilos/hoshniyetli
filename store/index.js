export const state = () => {
    return {
      showRegistration: false,
    };
  };
  
  export const mutations = {
    changeShowReg(state, payload) {
      state.showRegistration = payload.showState;
    },
  };
  
  export const actions = {
    showReg(context) {
      context.commit("changeShowReg", { showState: true });
    },
    dontShow(context) {
      context.commit("changeShowReg", { showState: false });
    },
  };
  
  export const getters = {
    showReg(state) {
      return state.showRegistration;
    },
  };

  // export const getYear = (state) =>{
  //   let year = state.getFullYear();
  // }
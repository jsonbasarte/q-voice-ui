import { createStore, Commit } from 'vuex';
import InboundCallConfig from './inboundCallConfig/inboundCallConfig';
import PhoneNumberConfig from './phoneNumberConfig/phoneNumberConfig';
import ClickToCall from './clickToCall/clickToCall';
import CallRecording from './callRecording/callRecording';
import CallDetailRecords from './callDetailRecords/callDetailRecords';
import IVRConfig from './ivr/ivrConfig';
import AccountConfig from './accountConfig/accountConfig';
import Auth from './auth/auth';

interface MainState {
   confirmDialogStatus: boolean;
}

export default createStore({
    state() {
        return {
          confirmDialogStatus: false
        } as MainState
    },
    getters: {
        getConfirmDialogStatus: (state: MainState): boolean => state.confirmDialogStatus
    },
    mutations: {
        openConfirmDialog(state: MainState, payload: boolean) {
            state.confirmDialogStatus = payload;
        }
    },
    actions: {
       openConfirmDialog({ commit }: { commit: Commit }, payload: boolean) {
           commit('openConfirmDialog', payload);
       }
    },
    modules: {
        InboundCallConfig, 
        PhoneNumberConfig,
        ClickToCall,
        CallRecording,
        CallDetailRecords,
        IVRConfig,
        AccountConfig,
        Auth
    }
});
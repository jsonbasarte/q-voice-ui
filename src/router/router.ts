import { createRouter, createMemoryHistory, createWebHistory } from "vue-router";
// import ConfigContainer from "@/views/ConfigContainer.vue";
import CallRecording from "@/views/callRecording/CallRecording.vue";
import CallRecordingDetail from "@/views/callRecording/CallRecordingDetail.vue";
import CallLogs from "@/views/callDetailRecords/CallDetailRecords.vue";
import CallLogsDetail from "@/views/callDetailRecords/CallLogsDetail.vue";
import AccountConfig from "@/views/accountConfig/AccountConfig.vue";
import AccountConfigDetail from "@/views/accountConfig/AccountConfigDetail.vue";
import AccountConfigAdd from "@/views/accountConfig/AccountConfigAdd.vue";
import AccountPage from "@/views/accountConfig/AccountPage.vue";
import AccountLogin from "@/views/accountConfig/AccountLogin.vue";
import AccountRegister from "@/views/accountConfig/AccountRegister.vue";
import MainContainer from "@/components/MainContainer.vue";
import Dashboard from "@/components/Dashboard.vue";
import CallConfigNew from "@/views/callConfig/CallConfigContainer.vue";

// Config
import PhoneNumberConfig from "@/views/callConfig/phoneNumber/PhoneNumber.vue";
import AddConfig from "@/views/callConfig/phoneNumber/AddConfig.vue";

import InboundConfig from "@/views/callConfig/inbound/Inbound.vue";
import IVRConfig from "@/views/callConfig/ivr/IVR.vue";

import TestCall from "@/views/testCall/TestCall.vue";

const isServer = typeof window === 'undefined';

const history = isServer ? createMemoryHistory() : createWebHistory();

const routes: Array<any> = [
    {
        path: "/account/login",
        name: "Login",
        component: AccountPage,
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: '/account/login',
                name: 'User Login',
                component: AccountLogin
            },
            {
                path: '/account/register',
                name: 'User Register',
                component: AccountRegister
            }
        ]
    },
    {
        path: '/',
        name: 'MainContainer',
        component: MainContainer,
        children: [
            {
                path: "/dashboard",
                name: "Dashboard",
                component: Dashboard,
            },
            // {
            //     path: "/call-config",
            //     name: "Call Config",
            //     component: ConfigContainer,
            // },
            {
                path: "/phone-number",
                name: "Phone Number",
                component: PhoneNumberConfig,
            },
            {
                path: "/call-config-new/phone-number/add",
                name: "Add Phone Number",
                component: AddConfig,
            },
             {
                path: "/call-config-new/inbound",
                name: "Inbound",
                component: InboundConfig,
            },
             {
                path: "/ivr-config",
                name: "IVR",
                component: IVRConfig,
            },
            {
                path: "/call-recording",
                name: "Call Recording",
                component: CallRecording,
                meta: {
                    requiresAuth: true,
                },
            },
            {
                path: "/test-call",
                name: "Test Call",
                component: TestCall,
            },
            {
                path: "/call-recording/details",
                name: "Call Recording Details",
                component: CallRecordingDetail,
                meta: {
                    requiresAuth: true,
                },
            },
            {
                path: "/call-logs",
                name: "Call Logs",
                component: CallLogs,
            },
            {
                path: "/call-logs/details",
                name: "Call Logs Detail",
                component: CallLogsDetail,
            },
            {
                path: "/account-config",
                name: "Account Config",
                component: AccountConfig,
            },
            {
                path: "/account-config/details",
                name: "Account Config Detail",
                component: AccountConfigDetail,
            },
            {
                path: "/account-config/add",
                name: "Add Account Config",
                component: AccountConfigAdd,
            }
        ]
    }
];

const router = createRouter({
    history,
    routes,
});
// window.popStateDetected = false
// window.addEventListener('popstate', () => {
//   window.popStateDetected = true
// })

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (!localStorage.getItem('fs_auth_token')) {
//             next("/");
//         } else {
//             next();
//         }
//     } else { next() }
// });

export default router;


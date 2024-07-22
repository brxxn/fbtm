// new lines (count = 18):

__d("XFBSbxArkoseCaptchaIframeControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/captcha/arkose/iframe/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XBizWebCometBizSuiteSettingsMV4BNonBusinessControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/latest/settings/mv4b_non_business/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("CometAuthenticitySecurityCardBody.react",["fbt","ix","BAPProduct","BSCStylingUtil","BusinessVerificationDesignSystem","BusinessVerificationUIType","CometAuthenticitySecurityCardDiscardDialog.react","CometAuthenticitySecurityCardNMIDialog.react","CometAuthenticitySecurityCardXFACUtils","CometBVAppealRejectionMutation","CometBVDiscardSubmissionMutation","CometColumn.react","CometColumnItem.react","CometCompatModalUniversalResource","CometLink.react","CometRelay","CometRow.react","CometRowItem.react","FDSSkittleIcon.react","MSCBaseCard.react","PayoutEnvironmentProvider","RelayHooks","TetraButton.react","TetraIcon.react","TetraText.react","Ufac_Config","Xfac_XFACAppealType","cr:3413","cr:6372","fbicon","formatDate","getGraphQLEnumSafe","jsRouteBuilder","nullthrows","react","useCometLazyDialog","useIXTBusinessVerificationWizardTriggerDialog","useIXTCpoWizardTriggerDialog","useIXTXfacBvTriggerDialog","useNullthrowsViolation"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=j||(j=d("react")),l=j.useState;function m(a){var e=a.label,f=a.onPress,g=a.size;a=a.type;var h=d("PayoutEnvironmentProvider").usePayoutEnvironment(),i="authenticity-security-card-button";return d("BSCStylingUtil").isGeoDesignSystem(h)&&b("cr:6372")?k.jsx(b("cr:6372"),{"data-testid":void 0,label:e,onClick:f}):k.jsx(c("TetraButton.react"),{label:e,onPress:f,size:g,testid:void 0,type:a})}m.displayName=m.name+" [from "+f.id+"]";function a(a){var e=a.bapProduct,f=a.can_discard_submission,g=a.canned_responses,j=a.configType,n=a.eligibility_reasons,o=a.fev_wizard_product,p=a.idv_failure_reason,q=a.is_eligible,r=a.nmiDataFragment,s=a.orgID,t=a.orgName,u=a.pageID,v=a.reload,w=a.shouldUseXFACBVWizard,x=a.ui_surface,y=a.verification_completion_time,z=a.verification_status;a=a.verification_submitted_time;var A=l(!1),B=A[0],C=A[1];A=l(!1);var D=A[0],E=A[1];A=l(!1);var F=A[0],G=A[1];A=c("useCometLazyDialog")(c("CometCompatModalUniversalResource"));A=A[0];var H=d("CometRelay").useRelayEnvironment(),I=d("PayoutEnvironmentProvider").usePayoutEnvironment(),J=c("useNullthrowsViolation")(c("getGraphQLEnumSafe")(c("BusinessVerificationUIType"),x)),K=c("useNullthrowsViolation")(c("getGraphQLEnumSafe")(c("BAPProduct"),e));e=d("CometAuthenticitySecurityCardXFACUtils").getXFACConfigAndAppealTypeFromBAPProduct(e);var L=e.xfacAppealType;e=e.xfacConfig;u=c("useIXTCpoWizardTriggerDialog")({country:"US",location:"CPO_WIZARD",org_id:s,page_id:(u=u)!=null?u:"",trigger_event_type:"DIRECT_OPEN_CPO_WIZARD"});var M=u[0];u[1];u=c("useIXTXfacBvTriggerDialog")({authenticatable_entity_id:s,business_verification_design_system:c("nullthrows")(c("getGraphQLEnumSafe")(c("BusinessVerificationDesignSystem"),"COMET")),business_verification_ui_type:J,trigger_event_type:"XFAC_BV_ENTRY",xfac_appeal_type:c("getGraphQLEnumSafe")(c("Xfac_XFACAppealType"),L),xfac_config:c("getGraphQLEnumSafe")(c("Ufac_Config"),e)});L=u[0];u[1];e=c("useIXTBusinessVerificationWizardTriggerDialog")({bap_product:K,business_id:s,business_verification_ui_type:J,config_type:j,fev_wizard_product:o,location:"BUSINESS_VERIFICATION_WIZARD",trigger_event_type:"DIRECT_OPEN_BUSINESS_VERIFICATION_WIZARD"});u=e[0];e[1];var N;switch(o){case"PAGE_RELATIONSHIP_TRANSPARENCY":N=M;break;case"CLASSIC_BV":case"CLASSIC_WITH_TAX_ID_BV":case"POLITICAL_ADS":N=u;break}w&&(N=L);if(!q&&z!=="VERIFIED")return null;var O=function(){N({},Q)};K=null;x==="blue_badge"?K=h._("__JHASH__t877ApiigS6__JHASH__"):t!=null?K=h._("__JHASH__A0mKUaimjHi__JHASH__",[h._param("org-name",t)]):K=h._("__JHASH__uV9_Fh9XLMn__JHASH__");j=null;e=null;o=null;M=null;u=null;w=null;switch(z){case"NOT_STARTED":case"EXPIRED":case"REVOKED":o=x==="blue_badge"?k.jsx(c("FDSSkittleIcon.react"),{color:"gray",icon:d("fbicon")._(i("481905"),20),size:36}):k.jsx(c("TetraIcon.react"),{color:"secondary",icon:d("fbicon")._(i("481905"),20)});M=h._("__JHASH__e1eTV4aSHFv__JHASH__");n.includes("payouts")?j=h._("__JHASH__jeTjLsVPxah__JHASH__"):n.includes("shops_mandatory")?(j=h._("__JHASH__uBM82lhfMVv__JHASH__"),o=k.jsx(c("TetraIcon.react"),{color:"warning",icon:d("fbicon")._(i("502062"),20)}),M=h._("__JHASH__DfLwwTLSw5I__JHASH__")):j=h._("__JHASH__46oMLaW9l-R__JHASH__",[h._implicitParam("=m1",k.jsx(c("CometLink.react"),{href:"https://www.facebook.com/business/help/1095661473946872",target:"_blank",children:h._("__JHASH__8YAmSAeWFJQ__JHASH__")}))]);e=null;u=k.jsx(m,{label:h._("__JHASH__J7hF9_1m7aT__JHASH__"),onPress:O,size:"large",type:"primary"});w="authenticity-security-card-status-text-not-started";break;case"PENDING_NMI":if(a!=null&&a>0){L=c("formatDate")(a,"M d, Y");j=h._("__JHASH__l5u9xmO1cMg__JHASH__",[h._param("date of verification submission",L)]);e=h._("__JHASH__RhU5i-QWvRw__JHASH__")}else j=h._("__JHASH__RhU5i-QWvRw__JHASH__"),e=null;o=x==="blue_badge"?k.jsx(c("FDSSkittleIcon.react"),{color:"lemon",icon:d("fbicon")._(i("502062"),20),size:36}):k.jsx(c("TetraIcon.react"),{color:"warning",icon:d("fbicon")._(i("502062"),20)});M=h._("__JHASH__tvHaezvznDg__JHASH__");u=k.jsx(m,{label:h._("__JHASH__ZiZAz7Cx9ab__JHASH__"),onPress:function(){return C(!0)},size:"large",type:"primary"});w="authenticity-security-card-status-text-pending-nmi";break;case"PENDING_REVIEW":if(a!=null&&a>0){q=c("formatDate")(a,"M d, Y");j=h._("__JHASH__l5u9xmO1cMg__JHASH__",[h._param("date of verification submission",q)]);e=h._("__JHASH__3b_3dB6Eq8C__JHASH__")}else j=h._("__JHASH__3b_3dB6Eq8C__JHASH__");o=x==="blue_badge"?k.jsx(c("FDSSkittleIcon.react"),{color:"blue",icon:d("fbicon")._(i("478795"),20),size:36}):k.jsx(c("TetraIcon.react"),{color:"highlight",icon:d("fbicon")._(i("478795"),20)});M=h._("__JHASH__tXInmtK1umK__JHASH__");u=null;w="authenticity-security-card-status-text-pending-review";break;case"PENDING_SUBMISSION":j=h._("__JHASH__knj06w8IRT6__JHASH__");o=x==="blue_badge"?k.jsx(c("FDSSkittleIcon.react"),{color:"blue",icon:d("fbicon")._(i("479177"),20),size:36}):k.jsx(c("TetraIcon.react"),{color:"highlight",icon:d("fbicon")._(i("479177"),20)});M=h._("__JHASH__qUZz9ASb1pN__JHASH__");u=k.jsx(m,{label:h._("__JHASH__4CHY_OLoayX__JHASH__"),onPress:O,size:"large",type:"primary"});w="authenticity-security-card-status-text-pending-submission";break;case"REJECTED":j=h._("__JHASH__dPhV-XpE_1P__JHASH__");o=x==="blue_badge"?k.jsx(c("FDSSkittleIcon.react"),{color:"red",icon:d("fbicon")._(i("491581"),20),size:36}):k.jsx(c("TetraIcon.react"),{color:"negative",icon:d("fbicon")._(i("491581"),20)});M=h._("__JHASH__KUBrRHZHE1c__JHASH__");u=k.jsx(m,{label:h._("__JHASH__pn1arJrjYxA__JHASH__"),onPress:function(){return c("CometBVAppealRejectionMutation")(H,{creation_surface:J,organization_id:s},O,function(){})},size:"large",type:"secondary"});w="authenticity-security-card-status-text-pending-rejected";break;case"FAILED":o=k.jsx(c("FDSSkittleIcon.react"),{color:"red",icon:d("fbicon")._(i("491581"),20),size:36});M=h._("__JHASH__KUBrRHZHE1c__JHASH__");break;case"VERIFIED":z=c("formatDate")(y,"M d, Y");j=h._("__JHASH__8LvQmCtcja9__JHASH__",[h._param("date of verification",z)]);e=null;o=x==="blue_badge"?k.jsx(c("FDSSkittleIcon.react"),{color:"green",icon:d("fbicon")._(i("498146"),20),size:36}):k.jsx(c("TetraIcon.react"),{color:"positive",icon:d("fbicon")._(i("498146"),20)});M=h._("__JHASH__fc_-zjXBp6T__JHASH__");w="authenticity-security-card-status-text-verified";break;default:break}n=f?k.jsx(m,{label:h._("__JHASH__l-pAeNFvzLT__JHASH__"),onPress:function(){return E(!0)},size:"large",type:"secondary"}):null;L=e===null?h._("__JHASH__nzO3C3kQu3-__JHASH__",[h._param("first subtitle",j)]):h._("__JHASH__a7x3urPxARd__JHASH__",[h._param("first subtitle",j),h._param("second subtitle",k.jsx("div",{className:"x1sy10c2",children:e}))]);var P;x==="blue_badge"&&(L=h._("__JHASH__5ufJP0chas3__JHASH__"),P=k.jsx("div",{children:k.jsxs(c("CometRow.react"),{paddingHorizontal:0,paddingVertical:0,verticalAlign:"center",children:[k.jsx(c("CometRowItem.react"),{children:o}),k.jsx(c("CometRowItem.react"),{children:k.jsxs(c("CometColumn.react"),{spacing:8,children:[k.jsx(c("CometColumnItem.react"),{children:k.jsx(c("TetraText.react"),{type:"headlineEmphasized3",children:t})}),k.jsx(c("CometColumnItem.react"),{children:k.jsx(c("TetraText.react"),{type:"meta1",children:M})})]})})]})}));y=k.jsx(c("MSCBaseCard.react"),{content:k.jsxs(c("CometRow.react"),{paddingHorizontal:0,paddingVertical:0,verticalAlign:"center",children:[k.jsx(c("CometRowItem.react"),{children:(a=P)!=null?a:k.jsx("div",{className:"x14vqqas","data-testid":void 0,children:d("BSCStylingUtil").isGeoDesignSystem(I)&&b("cr:3413")?k.jsxs("div",{children:[k.jsx("span",{className:"xmo9yow",children:o}),k.jsx(b("cr:3413"),{children:(q=M)!=null?q:""})]}):k.jsxs(c("TetraText.react"),{type:"bodyLink3",children:[k.jsx("span",{className:"xmo9yow",children:o}),M]})})}),k.jsx(c("CometRowItem.react"),{expanding:!0,children:k.jsx("div",{})}),k.jsx(c("CometRowItem.react"),{children:n}),k.jsx(c("CometRowItem.react"),{children:u})]}),headline:K,headlineSubtitle:L});var Q=function(){v(),G(!1)};return k.jsxs("div",{children:[y,B?k.jsx(d("RelayHooks").RelayEnvironmentProvider,{environment:H,children:k.jsx(c("CometAuthenticitySecurityCardNMIDialog.react"),{canned_responses:g,idv_failure_reason:p,nmiDataFragment:r,on_close_handler:function(){return C(!1)},on_resubmit_handler:function(){C(!1),O()}})}):null,D?k.jsx(c("CometAuthenticitySecurityCardDiscardDialog.react"),{on_close_handler:function(){return E(!1)},on_discard_handler:function(){c("CometBVDiscardSubmissionMutation")(H,{business_id:s},function(){E(!1),v()},function(){})},org_name:t}):null,F?A({params:{disableClosingWithMask:!0,rel:"dialog",uri:c("jsRouteBuilder")("/authenticitysecuritycard/wizard/",{}).buildURL({org_id:s,product:"classic_bv",ui_surface:x})}},Q):null]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("XSMCGuidancePreOnboardingControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/bizkit/shopping-on-messenger/pre-onboarding/{app_id}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XSMCGuidancePreOnboardingControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/bizkit/shopping-on-messenger/pre-onboarding/{app_id}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometMarketplaceViolationTransparencyControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/marketplace/status/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XPayments3DSKBankLoadingViewControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/payments/3ds/init/loading/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometMarketplaceViolationTransparencyControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/marketplace/status/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XPayments3DSKBankLoadingViewControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/payments/3ds/init/loading/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("FXAccountsCenterAFSAPCRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/ads/no_ads/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XFanSubsCreatorEmailDownloadControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/subscriptions/creator/download/{page_id}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XAppsSbxShieldRootContainerControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/shield-bundle/root-container/{?asset_id}/{?version_id}/{?*resource_path}",Object.freeze({enable_development_features:!1}),void 0);b=a;g["default"]=b}),98);
__d("IGXBarcelonaFeedControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/{?variant}/",Object.freeze({onboarding_complete:!1}),void 0);b=a;g["default"]=b}),98);
__d("FXAccountsCenterAFSAPCRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/ads/no_ads/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XBusinessInviteUserByEmailCheckAsyncControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/business/invite_users_email_check/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XBoostedComponentFetchSpecsDataControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/ads/boosted_components/fetch_specs_data/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XAdStudyReportUniversalControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/ads/lift/report/latest/",Object.freeze({legacy_mode:!1}),void 0);b=a;g["default"]=b}),98);
__d("XAdLibraryFoundationControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/ads/library/{?ad_type_shortcut}/",Object.freeze({show_details:!1,show_faq:!1,show_whats_new:!1}),void 0);b=a;g["default"]=b}),98);

// old lines (count = 17)

__d("XCometLWIBoostedStoryPickerControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/ad_center/boost/story/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometLWIBoostedStoryPickerControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/ad_center/boost/story/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometGroupMembersContentModeratorControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/groups/{idorvanity}/members/content_moderator/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometLWIBoostedStoryPickerControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/ad_center/boost/story/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometLWIBoostedStoryPickerControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/ad_center/boost/story/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("CometAuthenticitySecurityCardBody.react",["fbt","ix","BAPProduct","BSCStylingUtil","BusinessVerificationUIType","CometAuthenticitySecurityCardDiscardDialog.react","CometAuthenticitySecurityCardNMIDialog.react","CometBVAppealRejectionMutation","CometBVDiscardSubmissionMutation","CometColumn.react","CometColumnItem.react","CometCompatModalUniversalResource","CometLink.react","CometRelay","CometRow.react","CometRowItem.react","FDSSkittleIcon.react","MSCBaseCard.react","PayoutEnvironmentProvider","RelayHooks","TetraButton.react","TetraIcon.react","TetraText.react","cr:3413","cr:6372","fbicon","formatDate","getGraphQLEnumSafe","jsRouteBuilder","react","useCometLazyDialog","useIXTBusinessVerificationWizardTriggerDialog","useIXTCpoWizardTriggerDialog","useNullthrowsViolation"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=j||(j=d("react")),l=j.useState;function m(a){var e=a.label,f=a.onPress,g=a.size;a=a.type;var h=d("PayoutEnvironmentProvider").usePayoutEnvironment(),i="authenticity-security-card-button";return d("BSCStylingUtil").isGeoDesignSystem(h)&&b("cr:6372")?k.jsx(b("cr:6372"),{"data-testid":void 0,label:e,onClick:f}):k.jsx(c("TetraButton.react"),{label:e,onPress:f,size:g,testid:void 0,type:a})}m.displayName=m.name+" [from "+f.id+"]";function a(a){var e=a.bapProduct,f=a.can_discard_submission,g=a.canned_responses,j=a.configType,n=a.eligibility_reasons,o=a.fev_wizard_product,p=a.idv_failure_reason,q=a.is_eligible,r=a.nmiDataFragment,s=a.orgID,t=a.orgName,u=a.pageID,v=a.reload,w=a.ui_surface,x=a.verification_completion_time,y=a.verification_status;a=a.verification_submitted_time;var z=l(!1),A=z[0],B=z[1];z=l(!1);var C=z[0],D=z[1];z=l(!1);var E=z[0],F=z[1];z=c("useCometLazyDialog")(c("CometCompatModalUniversalResource"));z=z[0];var G=d("CometRelay").useRelayEnvironment(),H=d("PayoutEnvironmentProvider").usePayoutEnvironment(),I=c("useNullthrowsViolation")(c("getGraphQLEnumSafe")(c("BusinessVerificationUIType"),w));u=c("useIXTCpoWizardTriggerDialog")({country:"US",location:"CPO_WIZARD",org_id:s,page_id:(u=u)!=null?u:"",trigger_event_type:"DIRECT_OPEN_CPO_WIZARD"});var J=u[0];u[1];u=c("useIXTBusinessVerificationWizardTriggerDialog")({bap_product:c("getGraphQLEnumSafe")(c("BAPProduct"),e),business_id:s,business_verification_ui_type:I,config_type:j,fev_wizard_product:o,location:"BUSINESS_VERIFICATION_WIZARD",trigger_event_type:"DIRECT_OPEN_BUSINESS_VERIFICATION_WIZARD"});e=u[0];u[1];var K;switch(o){case"PAGE_RELATIONSHIP_TRANSPARENCY":K=J;break;case"CLASSIC_BV":case"CLASSIC_WITH_TAX_ID_BV":case"POLITICAL_ADS":K=e;break}if(!q&&y!=="VERIFIED")return null;var L=function(){K({},O)};j=null;w==="blue_badge"?j=h._("__JHASH__t877ApiigS6__JHASH__"):t!=null?j=h._("__JHASH__A0mKUaimjHi__JHASH__",[h._param("org-name",t)]):j=h._("__JHASH__uV9_Fh9XLMn__JHASH__");u=null;o=null;J=null;e=null;q=null;var M=null;switch(y){case"NOT_STARTED":case"EXPIRED":case"REVOKED":J=w==="blue_badge"?k.jsx(c("FDSSkittleIcon.react"),{color:"gray",icon:d("fbicon")._(i("481905"),20),size:36}):k.jsx(c("TetraIcon.react"),{color:"secondary",icon:d("fbicon")._(i("481905"),20)});e=h._("__JHASH__e1eTV4aSHFv__JHASH__");n.includes("payouts")?u=h._("__JHASH__jeTjLsVPxah__JHASH__"):n.includes("shops_mandatory")?(u=h._("__JHASH__uBM82lhfMVv__JHASH__"),J=k.jsx(c("TetraIcon.react"),{color:"warning",icon:d("fbicon")._(i("502062"),20)}),e=h._("__JHASH__DfLwwTLSw5I__JHASH__")):u=h._("__JHASH__46oMLaW9l-R__JHASH__",[h._implicitParam("=m1",k.jsx(c("CometLink.react"),{href:"https://www.facebook.com/business/help/1095661473946872",target:"_blank",children:h._("__JHASH__8YAmSAeWFJQ__JHASH__")}))]);o=null;q=k.jsx(m,{label:h._("__JHASH__J7hF9_1m7aT__JHASH__"),onPress:L,size:"large",type:"primary"});M="authenticity-security-card-status-text-not-started";break;case"PENDING_NMI":if(a!=null&&a>0){y=c("formatDate")(a,"M d, Y");u=h._("__JHASH__l5u9xmO1cMg__JHASH__",[h._param("date of verification submission",y)]);o=h._("__JHASH__RhU5i-QWvRw__JHASH__")}else u=h._("__JHASH__RhU5i-QWvRw__JHASH__"),o=null;J=w==="blue_badge"?k.jsx(c("FDSSkittleIcon.react"),{color:"lemon",icon:d("fbicon")._(i("502062"),20),size:36}):k.jsx(c("TetraIcon.react"),{color:"warning",icon:d("fbicon")._(i("502062"),20)});e=h._("__JHASH__tvHaezvznDg__JHASH__");q=k.jsx(m,{label:h._("__JHASH__ZiZAz7Cx9ab__JHASH__"),onPress:function(){return B(!0)},size:"large",type:"primary"});M="authenticity-security-card-status-text-pending-nmi";break;case"PENDING_REVIEW":if(a!=null&&a>0){n=c("formatDate")(a,"M d, Y");u=h._("__JHASH__l5u9xmO1cMg__JHASH__",[h._param("date of verification submission",n)]);o=h._("__JHASH__3b_3dB6Eq8C__JHASH__")}else u=h._("__JHASH__3b_3dB6Eq8C__JHASH__");J=w==="blue_badge"?k.jsx(c("FDSSkittleIcon.react"),{color:"blue",icon:d("fbicon")._(i("478795"),20),size:36}):k.jsx(c("TetraIcon.react"),{color:"highlight",icon:d("fbicon")._(i("478795"),20)});e=h._("__JHASH__tXInmtK1umK__JHASH__");q=null;M="authenticity-security-card-status-text-pending-review";break;case"PENDING_SUBMISSION":u=h._("__JHASH__knj06w8IRT6__JHASH__");J=w==="blue_badge"?k.jsx(c("FDSSkittleIcon.react"),{color:"blue",icon:d("fbicon")._(i("479177"),20),size:36}):k.jsx(c("TetraIcon.react"),{color:"highlight",icon:d("fbicon")._(i("479177"),20)});e=h._("__JHASH__qUZz9ASb1pN__JHASH__");q=k.jsx(m,{label:h._("__JHASH__4CHY_OLoayX__JHASH__"),onPress:L,size:"large",type:"primary"});M="authenticity-security-card-status-text-pending-submission";break;case"REJECTED":u=h._("__JHASH__dPhV-XpE_1P__JHASH__");J=w==="blue_badge"?k.jsx(c("FDSSkittleIcon.react"),{color:"red",icon:d("fbicon")._(i("491581"),20),size:36}):k.jsx(c("TetraIcon.react"),{color:"negative",icon:d("fbicon")._(i("491581"),20)});e=h._("__JHASH__KUBrRHZHE1c__JHASH__");q=k.jsx(m,{label:h._("__JHASH__pn1arJrjYxA__JHASH__"),onPress:function(){return c("CometBVAppealRejectionMutation")(G,{creation_surface:I,organization_id:s},L,function(){})},size:"large",type:"secondary"});M="authenticity-security-card-status-text-pending-rejected";break;case"FAILED":J=k.jsx(c("FDSSkittleIcon.react"),{color:"red",icon:d("fbicon")._(i("491581"),20),size:36});e=h._("__JHASH__KUBrRHZHE1c__JHASH__");break;case"VERIFIED":y=c("formatDate")(x,"M d, Y");u=h._("__JHASH__8LvQmCtcja9__JHASH__",[h._param("date of verification",y)]);o=null;J=w==="blue_badge"?k.jsx(c("FDSSkittleIcon.react"),{color:"green",icon:d("fbicon")._(i("498146"),20),size:36}):k.jsx(c("TetraIcon.react"),{color:"positive",icon:d("fbicon")._(i("498146"),20)});e=h._("__JHASH__fc_-zjXBp6T__JHASH__");M="authenticity-security-card-status-text-verified";break;default:break}a=f?k.jsx(m,{label:h._("__JHASH__l-pAeNFvzLT__JHASH__"),onPress:function(){return D(!0)},size:"large",type:"secondary"}):null;n=o===null?h._("__JHASH__nzO3C3kQu3-__JHASH__",[h._param("first subtitle",u)]):h._("__JHASH__a7x3urPxARd__JHASH__",[h._param("first subtitle",u),h._param("second subtitle",k.jsx("div",{className:"x1sy10c2",children:o}))]);var N;w==="blue_badge"&&(n=h._("__JHASH__5ufJP0chas3__JHASH__"),N=k.jsx("div",{children:k.jsxs(c("CometRow.react"),{paddingHorizontal:0,paddingVertical:0,verticalAlign:"center",children:[k.jsx(c("CometRowItem.react"),{children:J}),k.jsx(c("CometRowItem.react"),{children:k.jsxs(c("CometColumn.react"),{spacing:8,children:[k.jsx(c("CometColumnItem.react"),{children:k.jsx(c("TetraText.react"),{type:"headlineEmphasized3",children:t})}),k.jsx(c("CometColumnItem.react"),{children:k.jsx(c("TetraText.react"),{type:"meta1",children:e})})]})})]})}));M=k.jsx(c("MSCBaseCard.react"),{content:k.jsxs(c("CometRow.react"),{paddingHorizontal:0,paddingVertical:0,verticalAlign:"center",children:[k.jsx(c("CometRowItem.react"),{children:(x=N)!=null?x:k.jsx("div",{className:"x14vqqas","data-testid":void 0,children:d("BSCStylingUtil").isGeoDesignSystem(H)&&b("cr:3413")?k.jsxs("div",{children:[k.jsx("span",{className:"xmo9yow",children:J}),k.jsx(b("cr:3413"),{children:(y=e)!=null?y:""})]}):k.jsxs(c("TetraText.react"),{type:"bodyLink3",children:[k.jsx("span",{className:"xmo9yow",children:J}),e]})})}),k.jsx(c("CometRowItem.react"),{expanding:!0,children:k.jsx("div",{})}),k.jsx(c("CometRowItem.react"),{children:a}),k.jsx(c("CometRowItem.react"),{children:q})]}),headline:j,headlineSubtitle:n});var O=function(){v(),F(!1)};return k.jsxs("div",{children:[M,A?k.jsx(d("RelayHooks").RelayEnvironmentProvider,{environment:G,children:k.jsx(c("CometAuthenticitySecurityCardNMIDialog.react"),{canned_responses:g,idv_failure_reason:p,nmiDataFragment:r,on_close_handler:function(){return B(!1)},on_resubmit_handler:function(){B(!1),L()}})}):null,C?k.jsx(c("CometAuthenticitySecurityCardDiscardDialog.react"),{on_close_handler:function(){return D(!1)},on_discard_handler:function(){c("CometBVDiscardSubmissionMutation")(G,{business_id:s},function(){D(!1),v()},function(){})},org_name:t}):null,E?z({params:{disableClosingWithMask:!0,rel:"dialog",uri:c("jsRouteBuilder")("/authenticitysecuritycard/wizard/",{}).buildURL({org_id:s,product:"classic_bv",ui_surface:w})}},O):null]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("XCometGroupMembersContentModeratorControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/groups/{idorvanity}/members/content_moderator/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XWorkroomsPrismCanvasControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/app-embed/in-call/whiteboard/{link_hash}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XAppsSbxShieldRootContainerControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/shield-bundle/root-container/{?asset_id}/{?version_id}/{?*resource_path}",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XAdsImageSemanticDiversityPersonificationControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/ads/creative_diversity/semantic/image_personification/",Object.freeze({is_cbo:!1}),void 0);b=a;g["default"]=b}),98);
__d("XCometWorkGardenFileViewerControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/workrooms/{garden_id}/files/{file_id}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometWhitehatThanksControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/whitehat/thanks/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometWorkstreamHomeSettingsControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/work/workstream/home/settings/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XPolarisCAAIGAccountRecoverySearchControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/accounts/password/reset/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometWorkroomsHomeControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/workrooms/app/home/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometAccountSearchControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/login/identify/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometWorkGardensNoneControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/workrooms/none/",Object.freeze({create_workroom:!1}),new Set(["create_workroom"]));b=a;g["default"]=b}),98);
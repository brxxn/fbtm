// new lines (count = 7):

__d("GroupsCometSettingsEditMembershipPreapprovalDialogManagePreapprovalStep.react",["fbt","ix","BaseDivider.react","CometColumn.react","CometColumnItem.react","CometLink.react","CometListCell.react","CometListCellPressable.react","CometListCellText.react","CometRelay","CometSwitch.react","CometTextWithEntitiesRelay.react","DisclosureAddOn.react","GroupsCometSettingsEditMembershipPreapprovalDialogChooseGroupsStep.react","GroupsCometSettingsEditMembershipPreapprovalDialogManagePreapprovalStep_group.graphql","GroupsCometSettingsEditMembershipPreapprovalDialogUploadFileStep.react","TetraIcon.react","TetraListCell_DEPRECATED.react","TetraText.react","cometPushToast","fbicon","jsRouteBuilder","react","useGroupsCometAdditionalProfilePreApprovalSettingMutation"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l=k||(k=d("react")),m=k.useState,n=c("jsRouteBuilder")("/help/308412616488153",{}).buildURL({});function o(a){var b=a.body,d=a.headline,e=a.icon,f=a.onPress,g=a.subHeading;a=a.testid;return l.jsxs("div",{className:"x8cjs6t x1ch86jh x80vd3b xckqwgs x1lq5wgf xgqcy7u x30kzoy x9jhf4c x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x78zum5 xdt5ytf xieb3on xktsk01 x1d52u69 x6ikm8r x10wlt62","data-testid":void 0,children:[l.jsx(c("CometListCellPressable.react"),{addOnEnd:l.jsx(c("DisclosureAddOn.react"),{}),addOnStart:l.jsx(c("TetraIcon.react"),{color:"secondary",icon:e}),content:l.jsx(c("CometListCellText.react"),{body:l.jsx(c("TetraText.react"),{color:"secondary",type:"body3",children:b}),headline:l.jsx(c("TetraText.react"),{color:"secondary",type:"headline3",children:d})}),onPress:f,testid:void 0}),g!=null&&l.jsx("div",{className:"x443n21 x8cjs6t x13fuv20 x178xt8z",children:l.jsx(c("TetraListCell_DEPRECATED.react"),{body:g,bodyColor:"secondary"})})]})}o.displayName=o.name+" [from "+f.id+"]";function a(a){var e,f,g,k=a.group$key,p=a.pushPage,q=d("CometRelay").useFragment(j!==void 0?j:j=b("GroupsCometSettingsEditMembershipPreapprovalDialogManagePreapprovalStep_group.graphql"),k);a=q.membership_preapproved_groups_description_with_names;k=(k=q.latest_prevetted_user_list_file_upload)==null?void 0:k.file_name;e=(e=q.group_setting)==null?void 0:(e=e.title)==null?void 0:e.text;f=(f=q.group_setting)==null?void 0:(f=f.setting_description)==null?void 0:f.text;var r=q.id;g=((g=q.group_setting)==null?void 0:g.current_value)===1;var s=m(g),t=s[0],u=s[1];s=m(!0);var v=s[0],w=s[1];s=c("useGroupsCometAdditionalProfilePreApprovalSettingMutation")(r);var x=s[0];r=function(){w(!1),x({additionalProfilePreapprovalEnabled:!t,onSuccess:function(){t?d("cometPushToast").cometPushSimpleToast(h._("__JHASH__nViVnHaTPaR__JHASH__")):d("cometPushToast").cometPushSimpleToast(h._("__JHASH__ZsvjUMV4hle__JHASH__")),w(!0)}}),u(!t)};s=function(){p(function(){return l.jsx(c("GroupsCometSettingsEditMembershipPreapprovalDialogChooseGroupsStep.react"),{group$key:q})},{title:h._("__JHASH__cymqTXZiLSy__JHASH__")})};var y=function(){p(function(){return l.jsx(c("GroupsCometSettingsEditMembershipPreapprovalDialogUploadFileStep.react"),{group$key:q})},{title:h._("__JHASH__DT7-21L161-__JHASH__")})};e=q.group_setting!==null?l.jsxs(c("CometColumn.react"),{children:[l.jsx(c("CometColumnItem.react"),{paddingHorizontal:16,paddingTop:20,children:l.jsx(c("TetraText.react"),{color:"primary",type:"headlineEmphasized3",children:e!=null?e:null})}),l.jsx(c("CometColumnItem.react"),{paddingHorizontal:16,paddingTop:12,children:l.jsx(c("CometListCell.react"),{addOnEnd:l.jsx(c("CometSwitch.react"),{"aria-label":g?h._("__JHASH__k-8-imoTglJ__JHASH__"):h._("__JHASH__ecy2TSZebhn__JHASH__"),disabled:!v,onValueChange:r,value:t}),addOnEndVerticalAlign:"center",content:l.jsx(c("CometListCellText.react"),{headline:l.jsx(c("TetraText.react"),{type:"body2",children:f})})})}),l.jsx(c("CometColumnItem.react"),{paddingHorizontal:16,paddingTop:12,children:l.jsx(c("BaseDivider.react"),{})})]}):null;return l.jsxs(l.Fragment,{children:[e!=null?e:null,l.jsx("div",{className:"xx6bls6 x1pi30zi x1swvt13 x1cnzs8",children:l.jsxs(c("TetraText.react"),{color:"primary",type:"body2",children:[q.name!=null?h._("__JHASH__DwD5T9q0Wak__JHASH__",[h._implicitParam("=m2",l.jsx(c("TetraText.react"),{type:"bodyLink2",children:h._("__JHASH__IXAcfY8h9XH__JHASH__",[h._param("groupName",q.name)])}))]):h._("__JHASH__DpBlva61P7O__JHASH__")," ",l.jsx(c("CometLink.react"),{href:n,target:"_blank",children:l.jsx(c("TetraText.react"),{type:"bodyLink2",children:h._("__JHASH__qbWmT9omdNO__JHASH__")})})]})}),l.jsx(o,{body:h._("__JHASH__k4SUNAPoauh__JHASH__"),headline:((v=(g=q.auto_approval_group_infos)==null?void 0:g.is_empty)!=null?v:!1)?h._("__JHASH__Q7KbXEtvLPQ__JHASH__"):h._("__JHASH__tt3XmTPeIVM__JHASH__"),icon:d("fbicon")._(i("485091"),20),onPress:s,subHeading:a!=null?h._("__JHASH__yqpHWeDUNxH__JHASH__",[h._param("groups_list",l.jsx(c("TetraText.react"),{color:"secondary",type:"body4",children:l.jsx(c("CometTextWithEntitiesRelay.react"),{textWithEntities:a})})),h._implicitParam("=m0",l.jsx(c("TetraText.react"),{color:"secondary",type:"meta1",children:h._("__JHASH__tveHaMtyfYy__JHASH__")}))]):void 0,testid:void 0}),l.jsx(o,{body:h._("__JHASH__LVRtrTC7n1m__JHASH__"),headline:h._("__JHASH__O5jl_l7Jaxf__JHASH__"),icon:d("fbicon")._(i("728245"),20),onPress:y,subHeading:k!=null?h._("__JHASH__nyT34kT-nge__JHASH__",[h._param("file_name",l.jsx(c("TetraText.react"),{color:"secondary",type:"body4",children:k})),h._implicitParam("=m0",l.jsx(c("TetraText.react"),{color:"secondary",type:"meta1",children:h._("__JHASH__6Bj6oCiDQSi__JHASH__")}))]):void 0,testid:void 0})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("GroupsCometSettingsEditMembershipPreapprovalDialogManagePreapprovalStep.react",["fbt","ix","BaseDivider.react","CometColumn.react","CometColumnItem.react","CometLink.react","CometListCell.react","CometListCellPressable.react","CometListCellText.react","CometRelay","CometSwitch.react","CometTextWithEntitiesRelay.react","DisclosureAddOn.react","GroupsCometSettingsEditMembershipPreapprovalDialogChooseGroupsStep.react","GroupsCometSettingsEditMembershipPreapprovalDialogManagePreapprovalStep_group.graphql","GroupsCometSettingsEditMembershipPreapprovalDialogUploadFileStep.react","TetraIcon.react","TetraListCell_DEPRECATED.react","TetraText.react","cometPushToast","fbicon","jsRouteBuilder","react","useGroupsCometAdditionalProfilePreApprovalSettingMutation"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l=k||(k=d("react"));e=k;var m=e.useState,n=e.unstable_useMemoCache,o=c("jsRouteBuilder")("/help/308412616488153",{}).buildURL({});function p(a){var b=n(22),d=a.body,e=a.headline,f=a.icon,g=a.onPress,h=a.subHeading;a=a.testid;var i;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(i="x8cjs6t x1ch86jh x80vd3b xckqwgs x1lq5wgf xgqcy7u x30kzoy x9jhf4c x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x78zum5 xdt5ytf xieb3on xktsk01 x1d52u69 x6ikm8r x10wlt62",b[0]=i):i=b[0];var j;b[1]===Symbol["for"]("react.memo_cache_sentinel")?(j=l.jsx(c("DisclosureAddOn.react"),{}),b[1]=j):j=b[1];var k;b[2]!==f?(k=l.jsx(c("TetraIcon.react"),{color:"secondary",icon:f}),b[2]=f,b[3]=k):k=b[3];b[4]!==d?(f=l.jsx(c("TetraText.react"),{color:"secondary",type:"body3",children:d}),b[4]=d,b[5]=f):f=b[5];b[6]!==e?(d=l.jsx(c("TetraText.react"),{color:"secondary",type:"headline3",children:e}),b[6]=e,b[7]=d):d=b[7];b[8]!==f||b[9]!==d?(e=l.jsx(c("CometListCellText.react"),{body:f,headline:d}),b[8]=f,b[9]=d,b[10]=e):e=b[10];f=a+"-pressable";b[11]!==k||b[12]!==e||b[13]!==g||b[14]!==f?(d=l.jsx(c("CometListCellPressable.react"),{addOnEnd:j,addOnStart:k,content:e,onPress:g,testid:void 0}),b[11]=k,b[12]=e,b[13]=g,b[14]=f,b[15]=d):d=b[15];b[16]!==h?(j=h!=null&&l.jsx("div",{className:"x443n21 x8cjs6t x13fuv20 x178xt8z",children:l.jsx(c("TetraListCell_DEPRECATED.react"),{body:h,bodyColor:"secondary"})}),b[16]=h,b[17]=j):j=b[17];b[18]!==a||b[19]!==d||b[20]!==j?(k=l.jsxs("div",{className:i,"data-testid":void 0,children:[d,j]}),b[18]=a,b[19]=d,b[20]=j,b[21]=k):k=b[21];return k}function a(a){var e,f,g,k=n(46),q=a.group$key,r=a.pushPage,s=d("CometRelay").useFragment(j!==void 0?j:j=b("GroupsCometSettingsEditMembershipPreapprovalDialogManagePreapprovalStep_group.graphql"),q);a=s.membership_preapproved_groups_description_with_names;q=(q=s.latest_prevetted_user_list_file_upload)==null?void 0:q.file_name;e=(e=s.group_setting)==null?void 0:(e=e.title)==null?void 0:e.text;f=(f=s.group_setting)==null?void 0:(f=f.setting_description)==null?void 0:f.text;var t=s.id;g=((g=s.group_setting)==null?void 0:g.current_value)===1;var u=m(g),v=u[0],w=u[1];u=m(!0);var x=u[0],y=u[1];u=c("useGroupsCometAdditionalProfilePreApprovalSettingMutation")(t);var z=u[0];k[0]!==z||k[1]!==v?(t=function(){y(!1),z({additionalProfilePreapprovalEnabled:!v,onSuccess:function(){v?d("cometPushToast").cometPushSimpleToast(h._("__JHASH__nViVnHaTPaR__JHASH__")):d("cometPushToast").cometPushSimpleToast(h._("__JHASH__ZsvjUMV4hle__JHASH__")),y(!0)}}),w(!v)},k[0]=z,k[1]=v,k[2]=t):t=k[2];u=t;k[3]!==r||k[4]!==s?(t=function(){r(function(){return l.jsx(c("GroupsCometSettingsEditMembershipPreapprovalDialogChooseGroupsStep.react"),{group$key:s})},{title:h._("__JHASH__cymqTXZiLSy__JHASH__")})},k[3]=r,k[4]=s,k[5]=t):t=k[5];t=t;var A;k[6]!==r||k[7]!==s?(A=function(){r(function(){return l.jsx(c("GroupsCometSettingsEditMembershipPreapprovalDialogUploadFileStep.react"),{group$key:s})},{title:h._("__JHASH__DT7-21L161-__JHASH__")})},k[6]=r,k[7]=s,k[8]=A):A=k[8];A=A;var B;k[9]!==s.group_setting||k[10]!==e||k[11]!==g||k[12]!==x||k[13]!==u||k[14]!==v||k[15]!==f?(B=s.group_setting!==null?l.jsxs(c("CometColumn.react"),{children:[l.jsx(c("CometColumnItem.react"),{paddingHorizontal:16,paddingTop:20,children:l.jsx(c("TetraText.react"),{color:"primary",type:"headlineEmphasized3",children:e!=null?e:null})}),l.jsx(c("CometColumnItem.react"),{paddingHorizontal:16,paddingTop:12,children:l.jsx(c("CometListCell.react"),{addOnEnd:l.jsx(c("CometSwitch.react"),{"aria-label":g?h._("__JHASH__k-8-imoTglJ__JHASH__"):h._("__JHASH__ecy2TSZebhn__JHASH__"),disabled:!x,onValueChange:u,value:v}),addOnEndVerticalAlign:"center",content:l.jsx(c("CometListCellText.react"),{headline:l.jsx(c("TetraText.react"),{type:"body2",children:f})})})}),l.jsx(c("CometColumnItem.react"),{paddingHorizontal:16,paddingTop:12,children:l.jsx(c("BaseDivider.react"),{})})]}):null,k[9]=s.group_setting,k[10]=e,k[11]=g,k[12]=x,k[13]=u,k[14]=v,k[15]=f,k[16]=B):B=k[16];e=B;g=e!=null?e:null;k[17]===Symbol["for"]("react.memo_cache_sentinel")?(x="xx6bls6 x1pi30zi x1swvt13 x1cnzs8",k[17]=x):x=k[17];k[18]!==s.name?(u=s.name!=null?h._("__JHASH__DwD5T9q0Wak__JHASH__",[h._implicitParam("=m2",l.jsx(c("TetraText.react"),{type:"bodyLink2",children:h._("__JHASH__IXAcfY8h9XH__JHASH__",[h._param("groupName",s.name)])}))]):h._("__JHASH__DpBlva61P7O__JHASH__"),k[18]=s.name,k[19]=u):u=k[19];k[20]===Symbol["for"]("react.memo_cache_sentinel")?(f=l.jsx(c("CometLink.react"),{href:o,target:"_blank",children:l.jsx(c("TetraText.react"),{type:"bodyLink2",children:h._("__JHASH__qbWmT9omdNO__JHASH__")})}),k[20]=f):f=k[20];k[21]!==u?(B=l.jsx("div",{className:x,children:l.jsxs(c("TetraText.react"),{color:"primary",type:"body2",children:[u," ",f]})}),k[21]=u,k[22]=B):B=k[22];k[23]===Symbol["for"]("react.memo_cache_sentinel")?(e=h._("__JHASH__k4SUNAPoauh__JHASH__"),k[23]=e):e=k[23];if(k[24]!==s.auto_approval_group_infos){u=((f=(x=s.auto_approval_group_infos)==null?void 0:x.is_empty)!=null?f:!1)?h._("__JHASH__Q7KbXEtvLPQ__JHASH__"):h._("__JHASH__tt3XmTPeIVM__JHASH__");k[24]=s.auto_approval_group_infos;k[25]=u}else u=k[25];k[26]===Symbol["for"]("react.memo_cache_sentinel")?(x=d("fbicon")._(i("485091"),20),k[26]=x):x=k[26];k[27]!==a?(f=a!=null?h._("__JHASH__yqpHWeDUNxH__JHASH__",[h._param("groups_list",l.jsx(c("TetraText.react"),{color:"secondary",type:"body4",children:l.jsx(c("CometTextWithEntitiesRelay.react"),{textWithEntities:a})})),h._implicitParam("=m0",l.jsx(c("TetraText.react"),{color:"secondary",type:"meta1",children:h._("__JHASH__tveHaMtyfYy__JHASH__")}))]):void 0,k[27]=a,k[28]=f):f=k[28];k[29]!==u||k[30]!==t||k[31]!==f?(a=l.jsx(p,{body:e,headline:u,icon:x,onPress:t,subHeading:f,testid:void 0}),k[29]=u,k[30]=t,k[31]=f,k[32]=a):a=k[32];k[33]===Symbol["for"]("react.memo_cache_sentinel")?(e=h._("__JHASH__LVRtrTC7n1m__JHASH__"),x=h._("__JHASH__O5jl_l7Jaxf__JHASH__"),k[33]=e,k[34]=x):(e=k[33],x=k[34]);k[35]===Symbol["for"]("react.memo_cache_sentinel")?(u=d("fbicon")._(i("728245"),20),k[35]=u):u=k[35];k[36]!==q?(t=q!=null?h._("__JHASH__nyT34kT-nge__JHASH__",[h._param("file_name",l.jsx(c("TetraText.react"),{color:"secondary",type:"body4",children:q})),h._implicitParam("=m0",l.jsx(c("TetraText.react"),{color:"secondary",type:"meta1",children:h._("__JHASH__6Bj6oCiDQSi__JHASH__")}))]):void 0,k[36]=q,k[37]=t):t=k[37];k[38]!==A||k[39]!==t?(f=l.jsx(p,{body:e,headline:x,icon:u,onPress:A,subHeading:t,testid:void 0}),k[38]=A,k[39]=t,k[40]=f):f=k[40];k[41]!==g||k[42]!==B||k[43]!==a||k[44]!==f?(q=l.jsxs(l.Fragment,{children:[g,B,a,f]}),k[41]=g,k[42]=B,k[43]=a,k[44]=f,k[45]=q):q=k[45];return q}g["default"]=a}),226);
__d("ThisControllerNoLongerExists",["XControllerURIBuilder","XThisControllerNoLongerExistsController","jsRouteBuilder"],(function(a,b,c,d,e,f,g){"use strict";var h=function(b){babelHelpers.inheritsLoose(a,b);function a(a){var c;c=b.call(this,"/dcb/tcnle/",{})||this;c.$XControllerURIBuilderNoOpDead$p_1=a;return c}var d=a.prototype;d.__validateRequiredParamsExistence=function(){};d.__assertParamExists=function(a){};d.__setParam=function(a,b,c){return this};d.__setParamInt=function(a,b){};d.getRequest_LEGACY_UNTYPED=function(a){return a.setURI(this.getURI())};d.getURI=function(){return c("XThisControllerNoLongerExistsController").getURIBuilder().setString("t",this.$XControllerURIBuilderNoOpDead$p_1).getURI()};d.getLookasideURI=function(){return this.getURI()};return a}(c("XControllerURIBuilder"));function a(a){return c("XThisControllerNoLongerExistsController").getURIBuilder().setString("t",a).getURI()}function b(a){return new h(a)}function d(a){var b=c("jsRouteBuilder")("/dcb/tcnle/",{}),d={t:a};return{buildUri:function(){return b.buildUri(d)},buildUriNullable:function(){return b.buildUriNullable(d)},buildURL:function(){return b.buildURL(d)},buildURLStringDEPRECATED:function(){return b.buildURLStringDEPRECATED(d)}}}g.__DEADURI__=a;g.__DEADBUILDER__=b;g.__DEADROUTEBUILDER__=d}),98);
__d("XBusinessUnifiedLoginPageControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/business/loginpage/",Object.freeze({cma_account_switch:!1,is_ig_oidc_with_redirect:!1,from_ig_login_upsell_sso:!1,is_work_accounts:!1,is_workplatform:!1,is_targeting_other_login_options:!1,from_shop_manager:!1,from_ig_multi_admin_invite:!1,is_from_invitation_flow:!1,is_null_state:!1,is_ig_switching_account:!1,is_igfa_graduation_account_switch:!1}),void 0);b=a;g["default"]=b}),98);
__d("XBizWebCometBizSuiteInboxFacebookControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/latest/inbox/facebook/",Object.freeze({partnership_messages:!1,launch_onboarding:!1,auto_open_saved_replies:!1,auto_open_order_tip:!1}),void 0);b=a;g["default"]=b}),98);
__d("XFBFamilyCenterHomeControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/dashboard/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XBizWebCometLeadsCenterControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/latest/leads_center/",Object.freeze({is_unread:!1,is_lookalike_modal_open:!1}),void 0);b=a;g["default"]=b}),98);

// old lines (count = 24)

__d("GroupsCometSettingsEditMembershipPreapprovalDialogManagePreapprovalStep.react",["fbt","ix","BaseDivider.react","CometColumn.react","CometColumnItem.react","CometLink.react","CometListCell.react","CometListCellPressable.react","CometListCellText.react","CometRelay","CometSwitch.react","CometTextWithEntitiesRelay.react","DisclosureAddOn.react","GroupsCometSettingsEditMembershipPreapprovalDialogChooseGroupsStep.react","GroupsCometSettingsEditMembershipPreapprovalDialogManagePreapprovalStep_group.graphql","GroupsCometSettingsEditMembershipPreapprovalDialogUploadFileStep.react","TetraIcon.react","TetraListCell_DEPRECATED.react","TetraText.react","cometPushToast","fbicon","jsRouteBuilder","react","useGroupsCometAdditionalProfilePreApprovalSettingMutation"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l=k||(k=d("react")),m=k.useState,n=c("jsRouteBuilder")("/help/308412616488153",{}).buildURL({});function o(a){var b=a.body,d=a.headline,e=a.icon,f=a.onPress,g=a.subHeading;a=a.testid;return l.jsxs("div",{className:"x8cjs6t x1ch86jh x80vd3b xckqwgs x1lq5wgf xgqcy7u x30kzoy x9jhf4c x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x78zum5 xdt5ytf xieb3on xktsk01 x1d52u69 x6ikm8r x10wlt62","data-testid":void 0,children:[l.jsx(c("CometListCellPressable.react"),{addOnEnd:l.jsx(c("DisclosureAddOn.react"),{}),addOnStart:l.jsx(c("TetraIcon.react"),{color:"secondary",icon:e}),content:l.jsx(c("CometListCellText.react"),{body:l.jsx(c("TetraText.react"),{color:"secondary",type:"body3",children:b}),headline:l.jsx(c("TetraText.react"),{color:"secondary",type:"headline3",children:d})}),onPress:f,testid:void 0}),g!=null&&l.jsx("div",{className:"x443n21 x8cjs6t x13fuv20 x178xt8z",children:l.jsx(c("TetraListCell_DEPRECATED.react"),{body:g,bodyColor:"secondary"})})]})}o.displayName=o.name+" [from "+f.id+"]";function a(a){var e,f,g,k=a.group$key,p=a.pushPage,q=d("CometRelay").useFragment(j!==void 0?j:j=b("GroupsCometSettingsEditMembershipPreapprovalDialogManagePreapprovalStep_group.graphql"),k);a=q.membership_preapproved_groups_description_with_names;k=(k=q.latest_prevetted_user_list_file_upload)==null?void 0:k.file_name;e=(e=q.group_setting)==null?void 0:(e=e.title)==null?void 0:e.text;f=(f=q.group_setting)==null?void 0:(f=f.setting_description)==null?void 0:f.text;var r=q.id;g=((g=q.group_setting)==null?void 0:g.current_value)===1;var s=m(g),t=s[0],u=s[1];s=m(!0);var v=s[0],w=s[1];s=c("useGroupsCometAdditionalProfilePreApprovalSettingMutation")(r);var x=s[0];r=function(){w(!1),x({additionalProfilePreapprovalEnabled:!t,onSuccess:function(){t?d("cometPushToast").cometPushSimpleToast(h._("__JHASH__nViVnHaTPaR__JHASH__")):d("cometPushToast").cometPushSimpleToast(h._("__JHASH__ZsvjUMV4hle__JHASH__")),w(!0)}}),u(!t)};s=function(){p(function(){return l.jsx(c("GroupsCometSettingsEditMembershipPreapprovalDialogChooseGroupsStep.react"),{group$key:q})},{title:h._("__JHASH__cymqTXZiLSy__JHASH__")})};var y=function(){p(function(){return l.jsx(c("GroupsCometSettingsEditMembershipPreapprovalDialogUploadFileStep.react"),{group$key:q})},{title:h._("__JHASH__DT7-21L161-__JHASH__")})};e=q.group_setting!==null?l.jsxs(c("CometColumn.react"),{children:[l.jsx(c("CometColumnItem.react"),{paddingHorizontal:16,paddingTop:20,children:l.jsx(c("TetraText.react"),{color:"primary",type:"headlineEmphasized3",children:e!=null?e:null})}),l.jsx(c("CometColumnItem.react"),{paddingHorizontal:16,paddingTop:12,children:l.jsx(c("CometListCell.react"),{addOnEnd:l.jsx(c("CometSwitch.react"),{disabled:!v,onValueChange:r,value:t,children:g?h._("__JHASH__k-8-imoTglJ__JHASH__"):h._("__JHASH__ecy2TSZebhn__JHASH__")}),addOnEndVerticalAlign:"center",content:l.jsx(c("CometListCellText.react"),{headline:l.jsx(c("TetraText.react"),{type:"body2",children:f})})})}),l.jsx(c("CometColumnItem.react"),{paddingHorizontal:16,paddingTop:12,children:l.jsx(c("BaseDivider.react"),{})})]}):null;return l.jsxs(l.Fragment,{children:[e!=null?e:null,l.jsx("div",{className:"xx6bls6 x1pi30zi x1swvt13 x1cnzs8",children:l.jsxs(c("TetraText.react"),{color:"primary",type:"body2",children:[q.name!=null?h._("__JHASH__DwD5T9q0Wak__JHASH__",[h._implicitParam("=m2",l.jsx(c("TetraText.react"),{type:"bodyLink2",children:h._("__JHASH__IXAcfY8h9XH__JHASH__",[h._param("groupName",q.name)])}))]):h._("__JHASH__DpBlva61P7O__JHASH__")," ",l.jsx(c("CometLink.react"),{href:n,target:"_blank",children:l.jsx(c("TetraText.react"),{type:"bodyLink2",children:h._("__JHASH__qbWmT9omdNO__JHASH__")})})]})}),l.jsx(o,{body:h._("__JHASH__k4SUNAPoauh__JHASH__"),headline:((r=(v=q.auto_approval_group_infos)==null?void 0:v.is_empty)!=null?r:!1)?h._("__JHASH__Q7KbXEtvLPQ__JHASH__"):h._("__JHASH__tt3XmTPeIVM__JHASH__"),icon:d("fbicon")._(i("485091"),20),onPress:s,subHeading:a!=null?h._("__JHASH__yqpHWeDUNxH__JHASH__",[h._param("groups_list",l.jsx(c("TetraText.react"),{color:"secondary",type:"body4",children:l.jsx(c("CometTextWithEntitiesRelay.react"),{textWithEntities:a})})),h._implicitParam("=m0",l.jsx(c("TetraText.react"),{color:"secondary",type:"meta1",children:h._("__JHASH__tveHaMtyfYy__JHASH__")}))]):void 0,testid:void 0}),l.jsx(o,{body:h._("__JHASH__LVRtrTC7n1m__JHASH__"),headline:h._("__JHASH__O5jl_l7Jaxf__JHASH__"),icon:d("fbicon")._(i("728245"),20),onPress:y,subHeading:k!=null?h._("__JHASH__nyT34kT-nge__JHASH__",[h._param("file_name",l.jsx(c("TetraText.react"),{color:"secondary",type:"body4",children:k})),h._implicitParam("=m0",l.jsx(c("TetraText.react"),{color:"secondary",type:"meta1",children:h._("__JHASH__6Bj6oCiDQSi__JHASH__")}))]):void 0,testid:void 0})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("GroupsCometSettingsEditMembershipPreapprovalDialogManagePreapprovalStep.react",["fbt","ix","BaseDivider.react","CometColumn.react","CometColumnItem.react","CometLink.react","CometListCell.react","CometListCellPressable.react","CometListCellText.react","CometRelay","CometSwitch.react","CometTextWithEntitiesRelay.react","DisclosureAddOn.react","GroupsCometSettingsEditMembershipPreapprovalDialogChooseGroupsStep.react","GroupsCometSettingsEditMembershipPreapprovalDialogManagePreapprovalStep_group.graphql","GroupsCometSettingsEditMembershipPreapprovalDialogUploadFileStep.react","TetraIcon.react","TetraListCell_DEPRECATED.react","TetraText.react","cometPushToast","fbicon","jsRouteBuilder","react","useGroupsCometAdditionalProfilePreApprovalSettingMutation"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l=k||(k=d("react"));e=k;var m=e.useState,n=e.unstable_useMemoCache,o=c("jsRouteBuilder")("/help/308412616488153",{}).buildURL({});function p(a){var b=n(22),d=a.body,e=a.headline,f=a.icon,g=a.onPress,h=a.subHeading;a=a.testid;var i;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(i="x8cjs6t x1ch86jh x80vd3b xckqwgs x1lq5wgf xgqcy7u x30kzoy x9jhf4c x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x78zum5 xdt5ytf xieb3on xktsk01 x1d52u69 x6ikm8r x10wlt62",b[0]=i):i=b[0];var j;b[1]===Symbol["for"]("react.memo_cache_sentinel")?(j=l.jsx(c("DisclosureAddOn.react"),{}),b[1]=j):j=b[1];var k;b[2]!==f?(k=l.jsx(c("TetraIcon.react"),{color:"secondary",icon:f}),b[2]=f,b[3]=k):k=b[3];b[4]!==d?(f=l.jsx(c("TetraText.react"),{color:"secondary",type:"body3",children:d}),b[4]=d,b[5]=f):f=b[5];b[6]!==e?(d=l.jsx(c("TetraText.react"),{color:"secondary",type:"headline3",children:e}),b[6]=e,b[7]=d):d=b[7];b[8]!==f||b[9]!==d?(e=l.jsx(c("CometListCellText.react"),{body:f,headline:d}),b[8]=f,b[9]=d,b[10]=e):e=b[10];f=a+"-pressable";b[11]!==k||b[12]!==e||b[13]!==g||b[14]!==f?(d=l.jsx(c("CometListCellPressable.react"),{addOnEnd:j,addOnStart:k,content:e,onPress:g,testid:void 0}),b[11]=k,b[12]=e,b[13]=g,b[14]=f,b[15]=d):d=b[15];b[16]!==h?(j=h!=null&&l.jsx("div",{className:"x443n21 x8cjs6t x13fuv20 x178xt8z",children:l.jsx(c("TetraListCell_DEPRECATED.react"),{body:h,bodyColor:"secondary"})}),b[16]=h,b[17]=j):j=b[17];b[18]!==a||b[19]!==d||b[20]!==j?(k=l.jsxs("div",{className:i,"data-testid":void 0,children:[d,j]}),b[18]=a,b[19]=d,b[20]=j,b[21]=k):k=b[21];return k}function a(a){var e,f,g,k=n(46),q=a.group$key,r=a.pushPage,s=d("CometRelay").useFragment(j!==void 0?j:j=b("GroupsCometSettingsEditMembershipPreapprovalDialogManagePreapprovalStep_group.graphql"),q);a=s.membership_preapproved_groups_description_with_names;q=(q=s.latest_prevetted_user_list_file_upload)==null?void 0:q.file_name;e=(e=s.group_setting)==null?void 0:(e=e.title)==null?void 0:e.text;f=(f=s.group_setting)==null?void 0:(f=f.setting_description)==null?void 0:f.text;var t=s.id;g=((g=s.group_setting)==null?void 0:g.current_value)===1;var u=m(g),v=u[0],w=u[1];u=m(!0);var x=u[0],y=u[1];u=c("useGroupsCometAdditionalProfilePreApprovalSettingMutation")(t);var z=u[0];k[0]!==z||k[1]!==v?(t=function(){y(!1),z({additionalProfilePreapprovalEnabled:!v,onSuccess:function(){v?d("cometPushToast").cometPushSimpleToast(h._("__JHASH__nViVnHaTPaR__JHASH__")):d("cometPushToast").cometPushSimpleToast(h._("__JHASH__ZsvjUMV4hle__JHASH__")),y(!0)}}),w(!v)},k[0]=z,k[1]=v,k[2]=t):t=k[2];u=t;k[3]!==r||k[4]!==s?(t=function(){r(function(){return l.jsx(c("GroupsCometSettingsEditMembershipPreapprovalDialogChooseGroupsStep.react"),{group$key:s})},{title:h._("__JHASH__cymqTXZiLSy__JHASH__")})},k[3]=r,k[4]=s,k[5]=t):t=k[5];t=t;var A;k[6]!==r||k[7]!==s?(A=function(){r(function(){return l.jsx(c("GroupsCometSettingsEditMembershipPreapprovalDialogUploadFileStep.react"),{group$key:s})},{title:h._("__JHASH__DT7-21L161-__JHASH__")})},k[6]=r,k[7]=s,k[8]=A):A=k[8];A=A;var B;k[9]!==s.group_setting||k[10]!==e||k[11]!==x||k[12]!==g||k[13]!==u||k[14]!==v||k[15]!==f?(B=s.group_setting!==null?l.jsxs(c("CometColumn.react"),{children:[l.jsx(c("CometColumnItem.react"),{paddingHorizontal:16,paddingTop:20,children:l.jsx(c("TetraText.react"),{color:"primary",type:"headlineEmphasized3",children:e!=null?e:null})}),l.jsx(c("CometColumnItem.react"),{paddingHorizontal:16,paddingTop:12,children:l.jsx(c("CometListCell.react"),{addOnEnd:l.jsx(c("CometSwitch.react"),{disabled:!x,onValueChange:u,value:v,children:g?h._("__JHASH__k-8-imoTglJ__JHASH__"):h._("__JHASH__ecy2TSZebhn__JHASH__")}),addOnEndVerticalAlign:"center",content:l.jsx(c("CometListCellText.react"),{headline:l.jsx(c("TetraText.react"),{type:"body2",children:f})})})}),l.jsx(c("CometColumnItem.react"),{paddingHorizontal:16,paddingTop:12,children:l.jsx(c("BaseDivider.react"),{})})]}):null,k[9]=s.group_setting,k[10]=e,k[11]=x,k[12]=g,k[13]=u,k[14]=v,k[15]=f,k[16]=B):B=k[16];e=B;x=e!=null?e:null;k[17]===Symbol["for"]("react.memo_cache_sentinel")?(g="xx6bls6 x1pi30zi x1swvt13 x1cnzs8",k[17]=g):g=k[17];k[18]!==s.name?(u=s.name!=null?h._("__JHASH__DwD5T9q0Wak__JHASH__",[h._implicitParam("=m2",l.jsx(c("TetraText.react"),{type:"bodyLink2",children:h._("__JHASH__IXAcfY8h9XH__JHASH__",[h._param("groupName",s.name)])}))]):h._("__JHASH__DpBlva61P7O__JHASH__"),k[18]=s.name,k[19]=u):u=k[19];k[20]===Symbol["for"]("react.memo_cache_sentinel")?(f=l.jsx(c("CometLink.react"),{href:o,target:"_blank",children:l.jsx(c("TetraText.react"),{type:"bodyLink2",children:h._("__JHASH__qbWmT9omdNO__JHASH__")})}),k[20]=f):f=k[20];k[21]!==u?(B=l.jsx("div",{className:g,children:l.jsxs(c("TetraText.react"),{color:"primary",type:"body2",children:[u," ",f]})}),k[21]=u,k[22]=B):B=k[22];k[23]===Symbol["for"]("react.memo_cache_sentinel")?(e=h._("__JHASH__k4SUNAPoauh__JHASH__"),k[23]=e):e=k[23];if(k[24]!==s.auto_approval_group_infos){u=((f=(g=s.auto_approval_group_infos)==null?void 0:g.is_empty)!=null?f:!1)?h._("__JHASH__Q7KbXEtvLPQ__JHASH__"):h._("__JHASH__tt3XmTPeIVM__JHASH__");k[24]=s.auto_approval_group_infos;k[25]=u}else u=k[25];k[26]===Symbol["for"]("react.memo_cache_sentinel")?(g=d("fbicon")._(i("485091"),20),k[26]=g):g=k[26];k[27]!==a?(f=a!=null?h._("__JHASH__yqpHWeDUNxH__JHASH__",[h._param("groups_list",l.jsx(c("TetraText.react"),{color:"secondary",type:"body4",children:l.jsx(c("CometTextWithEntitiesRelay.react"),{textWithEntities:a})})),h._implicitParam("=m0",l.jsx(c("TetraText.react"),{color:"secondary",type:"meta1",children:h._("__JHASH__tveHaMtyfYy__JHASH__")}))]):void 0,k[27]=a,k[28]=f):f=k[28];k[29]!==u||k[30]!==t||k[31]!==f?(a=l.jsx(p,{body:e,headline:u,icon:g,onPress:t,subHeading:f,testid:void 0}),k[29]=u,k[30]=t,k[31]=f,k[32]=a):a=k[32];k[33]===Symbol["for"]("react.memo_cache_sentinel")?(e=h._("__JHASH__LVRtrTC7n1m__JHASH__"),g=h._("__JHASH__O5jl_l7Jaxf__JHASH__"),k[33]=e,k[34]=g):(e=k[33],g=k[34]);k[35]===Symbol["for"]("react.memo_cache_sentinel")?(u=d("fbicon")._(i("728245"),20),k[35]=u):u=k[35];k[36]!==q?(t=q!=null?h._("__JHASH__nyT34kT-nge__JHASH__",[h._param("file_name",l.jsx(c("TetraText.react"),{color:"secondary",type:"body4",children:q})),h._implicitParam("=m0",l.jsx(c("TetraText.react"),{color:"secondary",type:"meta1",children:h._("__JHASH__6Bj6oCiDQSi__JHASH__")}))]):void 0,k[36]=q,k[37]=t):t=k[37];k[38]!==A||k[39]!==t?(f=l.jsx(p,{body:e,headline:g,icon:u,onPress:A,subHeading:t,testid:void 0}),k[38]=A,k[39]=t,k[40]=f):f=k[40];k[41]!==x||k[42]!==B||k[43]!==a||k[44]!==f?(q=l.jsxs(l.Fragment,{children:[x,B,a,f]}),k[41]=x,k[42]=B,k[43]=a,k[44]=f,k[45]=q):q=k[45];return q}g["default"]=a}),226);
__d("XBizWebCometLeadsCenterControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/latest/leads_center/",Object.freeze({is_unread:!1}),void 0);b=a;g["default"]=b}),98);
__d("XContentLibraryCometCompareDataControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/transparency-tools/content-library/compare-data/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XContentLibraryCometDatasetSearchControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/transparency-tools/content-library/dataset/{dataset_id}/{platform}/search/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XContentLibraryCometProducerListControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/transparency-tools/content-library/producer-lists/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XContentLibraryCometDatasetListControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/transparency-tools/content-library/dataset/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XContentLibraryCometSavedSearchListControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/transparency-tools/content-library/saved/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XContentLibraryCometProducerListEditControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/transparency-tools/content-library/producer-lists/{producer_list_id}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XContentLibraryCometDatasetAboutControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/transparency-tools/content-library/dataset/{dataset_id}/about/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XContentLibraryCometSharedSearchControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/transparency-tools/content-library/shared/{shared_search_id}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XContentLibraryCometPostControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/transparency-tools/content-library/dataset/{dataset_id}/{platform}/post/{post_id}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XContentLibraryCometSavedSearchControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/transparency-tools/content-library/saved/{saved_search_id}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XContentLibraryCometHomeControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/transparency-tools/content-library/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("EPXHelpCookiePolicyControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/cookie_policy/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("EPXHelpDataPolicyControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/data_policy/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("EPXHelpTermsControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/terms/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XAdsExperimentsAdCreditPromoAckControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/ads/ads-experiments/promo-status-ack/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XWorkroomsCanvasViewControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/workrooms/whiteboards/{canvas_id}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XBusinessUnifiedLoginPageControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/business/loginpage/",Object.freeze({cma_account_switch:!1,from_ig_login_upsell_sso:!1,is_work_accounts:!1,is_workplatform:!1,is_targeting_other_login_options:!1,from_shop_manager:!1,from_ig_multi_admin_invite:!1,is_from_invitation_flow:!1,is_null_state:!1,is_ig_switching_account:!1,is_igfa_graduation_account_switch:!1}),void 0);b=a;g["default"]=b}),98);
__d("EPXHelpCookiePolicyControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/cookie_policy/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("EPXHelpDataPolicyControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/data_policy/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("EPXHelpTermsControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/terms/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XContentLibraryCometExportsControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/transparency-tools/content-library/exports/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
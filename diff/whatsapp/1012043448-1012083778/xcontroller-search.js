// new lines (count = 5):

__d("XBusinessEnterpriseEmailVerificationController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/business/enterprise/verification/email/",{nonce:{type:"String",required:!0}})}),null);
__d("XPresmaWhatsAppSendVerificationCodeController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/presma/whatsapp/verification_code/send/",{privacy_mutation_token:{type:"String"},client_params:{type:"TypeAssert"}})}),null);
__d("XPresmaWhatsAppVerificationCodeValidationController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/presma/whatsapp/verification_code/validate/",{privacy_mutation_token:{type:"String"},client_params:{type:"TypeAssert"}})}),null);
__d("XBusinessFetchAllPeopleDetailsAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/business/all_business_user_info/",{business_id:{type:"FBID"}})}),null);
__d("XAppAdsAppAEMv2ModeledAggrIdEligibilityController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/app/app_aem_v2/mae_modeled_aggr_id/",{app_id:{type:"FBID"},offsite_custom_event:{type:"Enum",enumType:1}})}),null);

// old lines (count = 3)

__d("XBusinessDownloadUsersAndPermissionsAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/business/download/user_info/",{business_id:{type:"FBID"}})}),null);
__d("XPresmaWhatsAppSendVerificationCodeController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/presma/whatsapp/verification_code/send/",{privacy_mutation_token:{type:"String"}})}),null);
__d("XPresmaWhatsAppVerificationCodeValidationController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/presma/whatsapp/verification_code/validate/",{privacy_mutation_token:{type:"String"}})}),null);
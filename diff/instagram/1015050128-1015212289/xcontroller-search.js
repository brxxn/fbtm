// new lines (count = 2):

__d("XDeveloperAllAppsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/apps/",{filter:{type:"Enum",enumType:1},search:{type:"String"},objective:{type:"Enum",enumType:1},required_action:{type:"FBID"},sort:{type:"Enum",enumType:1},duc_app_ids:{type:"FBIDVector"},archived_app_id:{type:"FBID"},restored_app_id:{type:"FBID"},super_access_error:{type:"Bool",defaultValue:!1},show_reminder:{type:"Bool",defaultValue:!1},no_redirect:{type:"Bool",defaultValue:!1},modals:{type:"EnumVector",enumType:{member:1}},business_id:{type:"FBID"},referring_message:{type:"FBID"},referring_source:{type:"String"}})}),null);
__d("XDeveloperAllAppsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/apps/",{filter:{type:"Enum",enumType:1},search:{type:"String"},objective:{type:"Enum",enumType:1},required_action:{type:"FBID"},sort:{type:"Enum",enumType:1},duc_app_ids:{type:"FBIDVector"},archived_app_id:{type:"FBID"},restored_app_id:{type:"FBID"},super_access_error:{type:"Bool",defaultValue:!1},show_reminder:{type:"Bool",defaultValue:!1},no_redirect:{type:"Bool",defaultValue:!1},modals:{type:"EnumVector",enumType:{member:1}},business_id:{type:"FBID"},referring_message:{type:"FBID"},referring_source:{type:"String"}})}),null);

// old lines (count = 49)

__d("XPagesManagerShopManagementController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/{page_token}/shop/settings/{?tab}/{?order_id}/",{business_id:{type:"Int"},page_token:{type:"String",required:!0},tab:{type:"Enum",enumType:1},order_id:{type:"FBID"}})}),null);
__d("XCommerceSelfServeMerchantNUXSeenController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/commerce/self-serve/merchant/mark-nux-seen/",{page_id:{type:"Int",required:!0},nux_type:{type:"Enum",required:!0,enumType:1},event:{type:"Enum",defaultValue:"Actn_NuxSeen",enumType:1}})}),null);
__d("XSphericalMediaNUXController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/spherical_media/show_nux/",{})}),null);
__d("XPagesManagerShopManagementController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/{page_token}/shop/settings/{?tab}/{?order_id}/",{business_id:{type:"Int"},page_token:{type:"String",required:!0},tab:{type:"Enum",enumType:1},order_id:{type:"FBID"}})}),null);
__d("XCommerceSelfServeMerchantNUXSeenController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/commerce/self-serve/merchant/mark-nux-seen/",{page_id:{type:"Int",required:!0},nux_type:{type:"Enum",required:!0,enumType:1},event:{type:"Enum",defaultValue:"Actn_NuxSeen",enumType:1}})}),null);
__d("XSphericalMediaNUXController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/spherical_media/show_nux/",{})}),null);
__d("XCommerceManagerOnsiteTargetedIGShopOnboardingRedirectController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/commerce_manager/onsite/targeted_redirect/",{utm_campaign:{type:"String"},utm_content:{type:"String"},utm_medium:{type:"String"},utm_source:{type:"String"},utm_term:{type:"String"},cms_id:{type:"FBID",required:!0},source:{type:"Enum",enumType:1}})}),null);
__d("XMessagingPluginRapidReportingDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/plugins/messaging_plugin/rapid_report/",{__asyncDialog:{type:"Int"},context:{type:"String",required:!0},preselectedtagid:{type:"Enum",enumType:1},access_token:{type:"String"},locale:{type:"String"},page_id:{type:"String"}})}),null);
__d("XBusinessConsoleBaseViewController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/meta_business_admin_center/{?tab}/",{tab:{type:"Enum",enumType:1},one_click_claim:{type:"Bool",defaultValue:!1},unclaim_business_portfolios:{type:"Bool",defaultValue:!1},from_l6_entrypoint:{type:"Bool",defaultValue:!1},request_id:{type:"String"}})}),null);
__d("XForwardingNUXSeenController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/chat/forwarding_nux_seen/",{})}),null);
__d("XDeveloperAllAppsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/apps/",{filter:{type:"Enum",enumType:1},search:{type:"String"},objective:{type:"Enum",enumType:1},required_action:{type:"FBID"},sort:{type:"Enum",enumType:1},duc_app_ids:{type:"FBIDVector"},archived_app_id:{type:"FBID"},restored_app_id:{type:"FBID"},super_access_error:{type:"Bool",defaultValue:!1},show_reminder:{type:"Bool",defaultValue:!1},no_redirect:{type:"Bool",defaultValue:!1},modals:{type:"EnumVector",enumType:{member:1}},business_id:{type:"FBID"}})}),null);
__d("XPagesCallToActionFetchDialogDataController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/call_to_action/fetch_dialog_data/",{id:{type:"FBID",required:!0},surface:{type:"Enum",required:!0,enumType:1},unit_type:{type:"Enum",enumType:1},cta_type:{type:"String"}})}),null);
__d("XCometWoodhengeSignupPermlinkController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/becomesupporter/{profilish_token}/",{auto_redirect:{type:"Bool",defaultValue:!0},entrypoint_surface:{type:"String"},post_id:{type:"String"},profilish_token:{type:"String",required:!0},surface:{type:"String"}})}),null);
__d("XWoodhengeSignupAsyncRequestPermalinkNotificationController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/becomesupporter/async/request_permalink_notification/",{__asyncDialog:{type:"Int"},page_id:{type:"FBID"}})}),null);
__d("XFanSubscriptionStickerDataLoaderAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/fan_funding/async/load_stickers/",{page_id:{type:"FBID",required:!0}})}),null);
__d("XFanSubscriptionStickerSubmitAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/fan_funding/async/submit_stickers/",{privacy_mutation_token:{type:"String"},page_id:{type:"FBID",required:!0},stickers:{type:"StringSet",required:!0},cover_sticker:{type:"String",required:!0}})}),null);
__d("XFanSubscriptionStickerValidatorAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/fan_funding/async/validate_stickers/",{page_id:{type:"FBID",required:!0}})}),null);
__d("XFanSubscriptionsStickerEditAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/fan_funding/async/edit_sticker/",{privacy_mutation_token:{type:"String"},page_id:{type:"FBID",required:!0},sticker_id:{type:"FBID",required:!0},sticker_name:{type:"String",required:!0}})}),null);
__d("XFanStickerTOSController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/fan/sticker/tos/",{})}),null);
__d("XVideoCaptionEditorNuxLogDismissAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video/captioneditor/nux/log/dismiss/",{})}),null);
__d("XVideoCaptionEditorNuxLogViewAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video/captioneditor/nux/log/view/",{})}),null);
__d("XCRMOpportunityImportCsvUploadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/crm/leads_csv_import/",{page_id:{type:"FBID",required:!0}})}),null);
__d("XLiveVideoMakeAnnouncementController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/live_video/make_announcement/",{broadcast_id:{type:"FBID",required:!0},announcement_type:{type:"Enum",required:!0,enumType:1},announcement_game_id:{type:"FBID"},target_page_id:{type:"FBID"},target_video_id:{type:"FBID"},goal_id:{type:"FBID"}})}),null);
__d("XCommerceManagerOffsiteShopUpdateSettingsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/commerce_manager/offsite/update/",{utm_campaign:{type:"String"},utm_content:{type:"String"},utm_medium:{type:"String"},utm_source:{type:"String"},utm_term:{type:"String"},id:{type:"FBID"},ref:{type:"String"},source:{type:"Enum",enumType:1}})}),null);
__d("XLeadGenSubscriptionAppsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/tools/lead-ads-testing/subscription-apps-fetch/",{})}),null);
__d("XLeadGenDirectCRMIntegrationDeleteController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/lead_gen/direct_crm_integration/Delete/",{})}),null);
__d("XLeadGenDirectCRMDynamicFieldsFetchController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/lead_gen/direct_crm_integration/fields_fetch/",{auth_id:{type:"FBID",required:!0},resources:{type:"StringToStringMap",required:!0}})}),null);
__d("XLeadGenDirectCRMIntegrationElementsFetchController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/lead_gen/direct_crm_integration/elements_fetch/",{})}),null);
__d("XLeadGenDirectCRMIntegrationExistingIntegrationsFetchController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/lead_gen/direct_crm_integration/existing_integrations_fetch/",{})}),null);
__d("XLeadGenDirectCRMIntegrationGoogleTestSendLeadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/lead_gen/direct_crm_integration/google_test_push_lead/",{})}),null);
__d("XLeadGenDirectCRMIntegrationSaveController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/lead_gen/direct_crm_integration/save/",{})}),null);
__d("XLeadGenDirectCRMIntegrationUpdateController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/lead_gen/direct_crm_integration/update/",{})}),null);
__d("XLeadGenDirectCRMIntegrationGoogleDetailController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/lead_gen/direct_crm_integration/gen_google_sheet/",{})}),null);
__d("XLeadGenDirectCRMIntegrationAuthDeleteController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/lead_gen/direct_crm_integration/auth/delete/",{})}),null);
__d("FBXSocialPluginIframeCustomerChatPluginOpenThreadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/messages/commerce/customer_chat_plugin/open_thread/",{page_id:{type:"FBID",required:!0},request_id:{type:"String",required:!0},referer_uri:{type:"String",required:!0},ref:{type:"String"},access_token:{type:"String"},logged_in_access_token:{type:"String"},locale:{type:"String"},is_from_re_engagement:{type:"Bool",defaultValue:!1}})}),null);
__d("FBXSocialPluginIframeMessagingPluginMarkReadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/plugins/live_chat/mark_read/",{access_token:{type:"String"},logged_in_access_token:{type:"String"},ids:{type:"StringToBoolMap",required:!0},watermark_timestamp:{type:"Int"}})}),null);
__d("XChatPluginNotificationMessagesManageController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/plugin/customer_chat/notification_messages_manage/",{page_id:{type:"String",required:!0},user_action:{type:"Int",required:!0},ref:{type:"String"}})}),null);
__d("XMNLiveChatBlockMessageController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/plugins/live_chat/block/",{page_id:{type:"String",required:!0}})}),null);
__d("XMNLiveChatMuteThreadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/plugins/live_chat/mute/",{thread_fbid:{type:"String",required:!0},mute_until:{type:"Int",required:!0}})}),null);
__d("XMNLiveChatUnblockMessageController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/plugins/live_chat/unblock/",{page_id:{type:"String",required:!0}})}),null);
__d("XMNMessagingPluginGuestSessionInvalidationController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/plugins/live_chat/session_invalidation/",{page_id:{type:"FBID",required:!0},referer_uri:{type:"String",required:!0},access_token:{type:"String",required:!0},ref:{type:"String"}})}),null);
__d("XMNPlatformCustomerChatPluginOpenThreadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/messages/commerce/customer_chat_plugin/open_thread/",{page_id:{type:"FBID",required:!0},request_id:{type:"String",required:!0},referer_uri:{type:"String",required:!0},ref:{type:"String"},access_token:{type:"String"},logged_in_access_token:{type:"String"},locale:{type:"String"},is_from_re_engagement:{type:"Bool",defaultValue:!1}})}),null);
__d("XMessagingPluginMarkReadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/plugins/live_chat/mark_read/",{access_token:{type:"String"},logged_in_access_token:{type:"String"},ids:{type:"StringToBoolMap",required:!0},watermark_timestamp:{type:"Int"}})}),null);
__d("XChatPluginIncognitoLoginPopupController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/plugins/chat/incognito_login/",{is_from_re_engagement:{type:"Bool",defaultValue:!1}})}),null);
__d("XChatPluginProfilePlusVoiceSwitchPopupController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/plugins/chat/voice_switch/",{})}),null);
__d("XChatPluginReEngagementAppSwitchController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/plugins/customer_chat/re_engagement_app_switch/",{page_id:{type:"Int",required:!0},ref:{type:"String"}})}),null);
__d("XPaymentSubscriptionCreatorVideoUploadParametersController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/paymentsubscriptions/async/get_video_upload_parameters/",{page_id:{type:"FBID",required:!0}})}),null);
__d("XAffiliateOnboardingPolicyController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/policies/streamer_affiliate/",{})}),null);
__d("XMNCommerceCloseBrowserController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/closeWindow/",{image_url:{type:"String",required:!0},display_text:{type:"String",required:!0}})}),null);
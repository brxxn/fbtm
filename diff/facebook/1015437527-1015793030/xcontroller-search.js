// new lines (count = 4):

__d("XAdsPreviewFeedbackController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/preview/feedback/",{adaccountid:{type:"Int",required:!0},adgroupid:{type:"Int",required:!0},ad_creative_optimization_type:{type:"Enum",enumType:0},ad_creative_optimization_option_value:{type:"Enum",enumType:0},api_ad_format:{type:"Enum",enumType:1},creative:{type:"String"},appid:{type:"Int",required:!0},feedback_type:{type:"Enum",enumType:1},entry_point:{type:"Enum",enumType:1},category:{type:"Enum",enumType:1},free_form_feedback:{type:"String"},screenshot_url:{type:"String"},feedback_survey_subject:{type:"Enum",enumType:1},feedback_entry_point:{type:"Enum",enumType:1},feature_enroll_status:{type:"Enum",enumType:1},is_survey_dismissed:{type:"Bool",defaultValue:!1},survey_data:{type:"EnumToStringDict",enumType:null},feature_info:{type:"String"},gen_ai_asset_generation_path:{type:"Enum",enumType:1}})}),null);
__d("XAdAccountOptimizedCustomEventsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ad_account/optimized_custom_events/",{act:{type:"Int",required:!0},data_source_type:{type:"Enum",required:!0,enumType:1},is_conversion_stages_only:{type:"Bool",defaultValue:!1}})}),null);
__d("XBusinessSettingsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/settings/{?tab}/{?asset_id}/",{business_id:{type:"FBID"},global_scope_id:{type:"FBID"},tab:{type:"String"},custom_tab:{type:"String"},custom_tab_data:{type:"String"},asset_id:{type:"Int"},subtab:{type:"String"},enable_redirection:{type:"Bool",defaultValue:!0},hide_nav:{type:"Bool",defaultValue:!1},bap_submission_id:{type:"FBID"},mma_manual_trigger_migration_enterprise_id:{type:"FBID"},referring_message:{type:"FBID"},referring_source:{type:"String"}})}),null);
__d("XAppAEMv2DedupUIEligibilityPendingRemovalStatusController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/app/events_manager2/aemv2/full_page_eligibility_checker/eligibility_pending_removal_status/",{})}),null);

// old lines (count = 20)

__d("XAdsPreviewFeedbackController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/preview/feedback/",{adaccountid:{type:"Int",required:!0},adgroupid:{type:"Int",required:!0},ad_creative_optimization_type:{type:"Enum",enumType:0},ad_creative_optimization_option_value:{type:"Enum",enumType:0},api_ad_format:{type:"Enum",enumType:1},creative:{type:"String"},appid:{type:"Int",required:!0},feedback_type:{type:"Enum",enumType:1},entry_point:{type:"Enum",enumType:1},category:{type:"Enum",enumType:1},free_form_feedback:{type:"String"},screenshot_url:{type:"String"},feedback_survey_subject:{type:"Enum",enumType:1},feedback_entry_point:{type:"Enum",enumType:1},feature_enroll_status:{type:"Enum",enumType:1},is_survey_dismissed:{type:"Bool",defaultValue:!1},survey_data:{type:"EnumToStringDict",enumType:null},feature_info:{type:"String"}})}),null);
__d("XAdsDeliveryHistoricalCampaignBenchmarkController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/delivery/campaign_benchmark/",{account_id:{type:"FBID",required:!0},bid_strategy:{type:"String",required:!0},campaign_id:{type:"FBID",required:!0},daily_budget:{type:"Int"},lifetime_budget:{type:"Int"},objective:{type:"String"},optimization_goal:{type:"String",required:!0},promoted_object:{type:"String"},targeting_spec:{type:"String",required:!0},start_time:{type:"String"},end_time:{type:"String"},warning_type:{type:"String",required:!0}})}),null);
__d("XPartnersOxsightsCellProfileController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/actionable_insights/ni/alerts/cellprofile/",{carrier_id:{type:"Int"},portal:{type:"Enum",enumType:1},ref:{type:"Enum",enumType:1},partner_id:{type:"Int"}})}),null);
__d("XBusinessAdvancedAnalyticsInstanceController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/advanced_analytics/instance/",{business_id:{type:"Int"},instance_id:{type:"FBID",required:!0},template_id:{type:"FBID"},revert_to_old_ui:{type:"Exists",defaultValue:!1}})}),null);
__d("XMessagingSetEmojiColorPrefController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/messaging/set_emoji_color/",{})}),null);
__d("XAdAccountOptimizedCustomEventsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ad_account/optimized_custom_events/",{act:{type:"Int",required:!0},data_source_type:{type:"Enum",required:!0,enumType:1}})}),null);
__d("XSlideshowShakrOAuthController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/slideshow/shakr/",{})}),null);
__d("XAdLibraryV2InsightsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/library/async/insights/",{ad_archive_id:{type:"FBID",required:!0},source:{type:"Enum",enumType:1},country:{type:"String"},session_id:{type:"String"}})}),null);
__d("XBusinessConsoleBaseViewController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/meta_business_admin_center/{?tab}/",{tab:{type:"Enum",enumType:1},one_click_claim:{type:"Bool",defaultValue:!1},unclaim_business_portfolios:{type:"Bool",defaultValue:!1},from_l6_entrypoint:{type:"Bool",defaultValue:!1},request_id:{type:"String"}})}),null);
__d("XMessengerContextBannerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/messenger/context_banner/",{profile_id:{type:"Int",required:!0},max_context_items:{type:"Int",defaultValue:3}})}),null);
__d("XAdsReportBuilderViewabilityExportInformationController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/report_builder/viewability_export/",{})}),null);
__d("XAdsCampaignHasDeletedConnectionsSavedAuidenceController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/targeting/campaign_has_deleted_connections_saved_audience/",{ad_account_id:{type:"FBID",required:!0},ids:{type:"FBIDVector",required:!0}})}),null);
__d("XPartnersOxsightsCellProfileController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/actionable_insights/ni/alerts/cellprofile/",{carrier_id:{type:"Int"},portal:{type:"Enum",enumType:1},ref:{type:"Enum",enumType:1},partner_id:{type:"Int"}})}),null);
__d("XBusinessAdvancedAnalyticsInstanceController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/advanced_analytics/instance/",{business_id:{type:"Int"},instance_id:{type:"FBID",required:!0},template_id:{type:"FBID"},revert_to_old_ui:{type:"Exists",defaultValue:!1}})}),null);
__d("XBoostedAutomatedAdsLeadGenFormPreviewController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/automated_ads/form_preview/",{__asyncDialog:{type:"Int"},ad_id:{type:"FBID"},ad_impression_client_token:{type:"String"},branding_image_uri:{type:"String"},carousel_index:{type:"Int"},description_text:{type:"String"},lead_gen_data_id:{type:"FBID",required:!0},recipient_id:{type:"FBID"},__cft__:{type:"StringVector"},dynamic_item_id:{type:"FBID"},__tn__:{type:"String"}})}),null);
__d("XBusinessSettingsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/settings/{?tab}/{?asset_id}/",{business_id:{type:"FBID"},global_scope_id:{type:"FBID"},tab:{type:"String"},custom_tab:{type:"String"},custom_tab_data:{type:"String"},asset_id:{type:"Int"},subtab:{type:"String"},enable_redirection:{type:"Bool",defaultValue:!0},hide_nav:{type:"Bool",defaultValue:!1},bap_submission_id:{type:"FBID"},mma_manual_trigger_migration_enterprise_id:{type:"FBID"}})}),null);
__d("XBusinessFetchEnterpriseAccountController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/business/fetch_enterprise_account/",{})}),null);
__d("XBusinessEnterpriseEmailVerificationController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/business/enterprise/verification/email/",{nonce:{type:"String",required:!0}})}),null);
__d("XPartnersOxsightsCellProfileController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/actionable_insights/ni/alerts/cellprofile/",{carrier_id:{type:"Int"},portal:{type:"Enum",enumType:1},ref:{type:"Enum",enumType:1},partner_id:{type:"Int"}})}),null);
__d("XBusinessAdvancedAnalyticsInstanceController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/advanced_analytics/instance/",{business_id:{type:"Int"},instance_id:{type:"FBID",required:!0},template_id:{type:"FBID"},revert_to_old_ui:{type:"Exists",defaultValue:!1}})}),null);
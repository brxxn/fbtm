// new lines (count = 7):

__d("XAdsFlyTrapDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/ajax/flytrap/dialog/",{product:{type:"Enum",enumType:1},account_id:{type:"Int"},ad_objective:{type:"String"},biz_site_page_type:{type:"String"},business_id:{type:"Int"},help_platform_path:{type:"String",required:!0},source:{type:"Enum",enumType:1},category:{type:"Enum",enumType:1},sub_category:{type:"Enum",enumType:1},misc_info:{type:"StringToStringDict"}})}),null);
__d("XACOAssetManagerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/ad_preview/aco/",{ad_account_id:{type:"FBID",required:!0},image_hash:{type:"String"},image_url:{type:"String"},headline:{type:"String"},ad_creative_optimization_type:{type:"Enum",required:!0,enumType:0},ad_creative_optimization_option_value:{type:"Enum",required:!0,enumType:0},trigger_async_gen_transform:{type:"Bool",defaultValue:!0}})}),null);
__d("XAdsManagerLeadGenAutoGenFormDataV2Controller",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/manager/get_lead_gen_auto_form_v2/",{})}),null);
__d("XAdsBugReportSubmitController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/ajax/bugs/submit/",{account_id:{type:"Int"},ad_object_identifier:{type:"String"},ad_objective:{type:"String"},attached_files:{type:"StringVector"},audience_id:{type:"String"},biz_site_page_type:{type:"String"},business_id:{type:"Int"},business_emails:{type:"StringVector"},category:{type:"String",required:!0},conversion_pixel_id:{type:"String"},description:{type:"String",defaultValue:""},page_id:{type:"Int"},permission_to_login_as:{type:"Bool",defaultValue:!1},post_id:{type:"Int"},post_url:{type:"String"},product:{type:"String"},session_id:{type:"String"},source:{type:"Enum",defaultValue:"unknown",enumType:1},sub_category:{type:"String"},third_category:{type:"Enum",enumType:1},url_tag_or_view_tag:{type:"String"},screenshot_data_uris:{type:"StringVector"},misc_info:{type:"String"}})}),null);
__d("XAdsEventsManagerDataSourceGKCheckController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/events_manager/data_source_gk/",{data_source_id:{type:"FBID",required:!0},gk_name_list:{type:"StringVector",required:!0},log_exposure:{type:"Bool",defaultValue:!1},check_all_cluster_data_source_ids:{type:"Bool",defaultValue:!1}})}),null);
__d("XAdsPEController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/adsmanager/",{path:{type:"String"},_fb_noscript:{type:"Bool",defaultValue:!1},act:{type:"Int"},adgroup:{type:"FBID"},attribution_windows:{type:"String"},audiences:{type:"String"},breakdown_regrouping:{type:"Bool",defaultValue:!1},business_id:{type:"FBID"},campaign:{type:"FBID"},campaign_group:{type:"FBID"},campaign_group_spec:{type:"String"},column_preset:{type:"String"},columns:{type:"String"},comparison_time_range:{type:"String"},creative_mockup_id:{type:"FBID"},destination:{type:"String"},global_scope_id:{type:"FBID"},page:{type:"String"},targeting_spec:{type:"String"},target_currency:{type:"String"},tool:{type:"String"},sot:{type:"String"},uitest:{type:"String"},date:{type:"String"},filter_set:{type:"String"},formatting_set:{type:"String"},limit:{type:"Int"},focus_area:{type:"String"},is_reload_from_account_change:{type:"Bool",defaultValue:!1},is_split_test:{type:"Bool",defaultValue:!1},insights_metrics:{type:"String"},insights_section:{type:"String"},root_level:{type:"Enum",enumType:1},selected_ad_ids:{type:"String"},selected_adset_ids:{type:"String"},selected_campaign_ids:{type:"String"},cadence:{type:"String"},image_url:{type:"String"},selected_page_id:{type:"FBID"},sort:{type:"String"},nav_entry_point:{type:"Enum",enumType:1},nav_source:{type:"Enum",enumType:1},objective:{type:"String"},package_config_id:{type:"FBID"},prefilled_adgroup_id:{type:"FBID"},selected_proposal_id:{type:"FBID"},errors_quick_filter:{type:"String"},optimization_goal:{type:"String"},launch_quick_creation:{type:"Bool",defaultValue:!1},view_type:{type:"Enum",enumType:1},launch_help_tray:{type:"Enum",enumType:1},help_tray_cms_id:{type:"FBID"},scroll_to_section:{type:"Enum",enumType:1},ad_script_id:{type:"FBID"},qpl_console_logging:{type:"Int"},notif_id:{type:"Int"},notif_t:{type:"String"},redirect_context:{type:"String"},event_source:{type:"String"},selected_report_id:{type:"String"},breakdowns:{type:"String"},metrics:{type:"String"},locked_dimensions:{type:"Int"},sort_spec:{type:"String"},time_range:{type:"String"},placement:{type:"String"},preview_sharing_key:{type:"String"},strategy_id:{type:"FBID"},page_id:{type:"FBID"},post_id:{type:"FBID"},crm_assignment_id:{type:"FBID"},ads_proposal_id:{type:"FBID"},creative_set_id:{type:"FBID"},package_deep_link_source:{type:"String"},recommendation_type:{type:"String"},recommendation_source:{type:"String"},adset_ids_with_warning:{type:"String"},shops_ads_brand_id:{type:"String"},show_view_history:{type:"Bool",defaultValue:!1},marketing_message_asset_id:{type:"FBID"},ab_test_action:{type:"String"},ab_test_lightweight_type:{type:"String"},schedule_call_job_id:{type:"String"},auto_apply_modal_type:{type:"String"},auto_apply_select_guidance:{type:"String"},conversion_location:{type:"String"},show_inbox_re_tos:{type:"Bool",defaultValue:!1},guidance_job_id:{type:"String"},adsai_actionability_adobj:{type:"String"},from_ads_ai:{type:"Bool",defaultValue:!1}})}),null);
__d("XCMSLegalPaymentsTermsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/payments_terms/{?terms_section}/{?preview}/",{terms_section:{type:"String"},preview:{type:"String"}})}),null);

// old lines (count = 35)

__d("XDynamicAdsAppAEMEligibilityController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/dynamic_ads/app_aem_eligibility/",{app_id:{type:"FBID",required:!0},product_set_id:{type:"FBID",required:!0},offsite_custom_event:{type:"Enum",required:!0,enumType:1},is_vo:{type:"Bool",defaultValue:!1},ad_account_id:{type:"FBID"}})}),null);
__d("XDynamicHandleAdsFetchOptOutStatusAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/instagram/dynamic_handle_ads_opt_out/fetch_status/async/",{ad_account_id:{type:"Int",required:!0}})}),null);
__d("XPartnerIntegrationGTMPayloadSenderController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pin/gtm/serverside/",{gtm_server_side_url:{type:"String",required:!0},event_name:{type:"String",required:!0},pixel_id:{type:"FBID",required:!0},timestamp:{type:"Int",required:!0},test_event_code:{type:"String",required:!0}})}),null);
__d("XPartnerIntegrationSegmentQuerySourcesController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/partner_integration/segment/query_sources/",{integration_id:{type:"FBID",required:!0}})}),null);
__d("XAdsAverageBudgetEditsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/delivery/average_budget_edits/",{account_id:{type:"FBID",required:!0},object_id:{type:"FBID",required:!0}})}),null);
__d("XPagesManagerFeaturedItemsCountController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/content_tab/featured_items_count/",{})}),null);
__d("XIsAdCampaignGroupEditingInAdsManagerDisabledForProfilePlusController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/can_profile_plus_edit_ad_campaign_group_in_ads_manager/",{ad_campaign_group_id:{type:"FBID",required:!0}})}),null);
__d("XCMSLegalPaymentsTermsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/payments_terms/{?terms_section}/",{terms_section:{type:"String"}})}),null);
__d("XRightsManagerPmvUploadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/sound_platform/pmv/upload/",{})}),null);
__d("XRightsManagerPmvUploadBatchListController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/sound_platform/pmv/batch/list/{?batch_id}/",{batch_id:{type:"FBID"},cursor:{type:"String"}})}),null);
__d("XRightsManagerPmvCsvUploadValidateController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/sound_platform/pmv/csv_validate/",{})}),null);
__d("XRightsManagerPmvUploadBatchController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/sound_platform/pmv/batch/",{})}),null);
__d("XAdsPEController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/adsmanager/",{path:{type:"String"},_fb_noscript:{type:"Bool",defaultValue:!1},act:{type:"Int"},adgroup:{type:"FBID"},attribution_windows:{type:"String"},audiences:{type:"String"},breakdown_regrouping:{type:"Bool",defaultValue:!1},business_id:{type:"FBID"},campaign:{type:"FBID"},campaign_group:{type:"FBID"},campaign_group_spec:{type:"String"},column_preset:{type:"String"},columns:{type:"String"},comparison_time_range:{type:"String"},creative_mockup_id:{type:"FBID"},destination:{type:"String"},global_scope_id:{type:"FBID"},page:{type:"String"},targeting_spec:{type:"String"},target_currency:{type:"String"},tool:{type:"String"},sot:{type:"String"},uitest:{type:"String"},date:{type:"String"},filter_set:{type:"String"},formatting_set:{type:"String"},limit:{type:"Int"},focus_area:{type:"String"},is_reload_from_account_change:{type:"Bool",defaultValue:!1},is_split_test:{type:"Bool",defaultValue:!1},insights_metrics:{type:"String"},insights_section:{type:"String"},root_level:{type:"Enum",enumType:1},selected_ad_ids:{type:"String"},selected_adset_ids:{type:"String"},selected_campaign_ids:{type:"String"},cadence:{type:"String"},image_url:{type:"String"},selected_page_id:{type:"FBID"},sort:{type:"String"},nav_entry_point:{type:"Enum",enumType:1},nav_source:{type:"Enum",enumType:1},objective:{type:"String"},package_config_id:{type:"FBID"},prefilled_adgroup_id:{type:"FBID"},selected_proposal_id:{type:"FBID"},errors_quick_filter:{type:"String"},optimization_goal:{type:"String"},launch_quick_creation:{type:"Bool",defaultValue:!1},view_type:{type:"Enum",enumType:1},launch_help_tray:{type:"Enum",enumType:1},help_tray_cms_id:{type:"FBID"},scroll_to_section:{type:"Enum",enumType:1},ad_script_id:{type:"FBID"},qpl_console_logging:{type:"Int"},notif_id:{type:"Int"},notif_t:{type:"String"},redirect_context:{type:"String"},event_source:{type:"String"},selected_report_id:{type:"String"},breakdowns:{type:"String"},metrics:{type:"String"},locked_dimensions:{type:"Int"},sort_spec:{type:"String"},time_range:{type:"String"},placement:{type:"String"},preview_sharing_key:{type:"String"},strategy_id:{type:"FBID"},page_id:{type:"FBID"},post_id:{type:"FBID"},crm_assignment_id:{type:"FBID"},ads_proposal_id:{type:"FBID"},creative_set_id:{type:"FBID"},package_deep_link_source:{type:"String"},recommendation_type:{type:"String"},recommendation_source:{type:"String"},adset_ids_with_warning:{type:"String"},shops_ads_brand_id:{type:"String"},show_view_history:{type:"Bool",defaultValue:!1},marketing_message_asset_id:{type:"FBID"},ab_test_action:{type:"String"},ab_test_lightweight_type:{type:"String"},schedule_call_job_id:{type:"String"},auto_apply_modal_type:{type:"String"},auto_apply_select_guidance:{type:"String"},conversion_location:{type:"String"},show_inbox_re_tos:{type:"Bool",defaultValue:!1},guidance_job_id:{type:"String"},adsai_actionability_adobj:{type:"String"}})}),null);
__d("XMediaManagerInstagramUploadPhotoFromFacebookPostController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/media/manager/instagram_composer/photo/upload_from_facebook/",{post_id:{type:"FBID",required:!0},shadow_ig_user_id:{type:"FBID",required:!0},source_product_name:{type:"Enum",required:!0,enumType:1}})}),null);
__d("XPageInsightsReactionsMetricsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/page/insights/reactions/metrics/",{end_time:{type:"Int"},page_id:{type:"Int"},post_id:{type:"String"},start_time:{type:"Int"}})}),null);
__d("XIsAdEditingInAdsManagerDisabledForProfilePlusController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/is_ad_editing_in_ads_manager_disabled_for_profile_plus/",{ad_group_id:{type:"FBID",required:!0}})}),null);
__d("XBusinessFetchAllPeopleDetailsAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/business/all_business_user_info/",{business_id:{type:"FBID"}})}),null);
__d("XACOAssetManagerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/ad_preview/aco/",{ad_account_id:{type:"FBID",required:!0},image_hash:{type:"String"},image_url:{type:"String"},ad_creative_optimization_type:{type:"Enum",required:!0,enumType:0},ad_creative_optimization_option_value:{type:"Enum",required:!0,enumType:0},trigger_async_gen_transform:{type:"Bool",defaultValue:!0}})}),null);
__d("XBusinessAppStoreUserValidateController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/business_app_store/validate/",{})}),null);
__d("XProfileCometCoverPhotoUploadAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/profile/cover/comet_upload/",{privacy_mutation_token:{type:"String"},profile_id:{type:"FBID",required:!0}})}),null);
__d("XAdsFlyTrapDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/ajax/flytrap/dialog/",{product:{type:"Enum",enumType:1},account_id:{type:"Int"},ad_objective:{type:"String"},biz_site_page_type:{type:"String"},business_id:{type:"Int"},help_platform_path:{type:"String",required:!0},source:{type:"Enum",enumType:1},category:{type:"Enum",enumType:1},sub_category:{type:"Enum",enumType:1}})}),null);
__d("XVideoAutoplayNuxDismissAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video/autoplay/nux/dismiss/",{})}),null);
__d("XVideoAutoplayNuxLogViewAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video/autoplay/nux/log/view/",{})}),null);
__d("XBusinessDownloadBusinessActivityLogsAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/business/download/activitylogs/",{business_id:{type:"FBID"},start_time:{type:"Int"},end_time:{type:"Int"}})}),null);
__d("XBusinessGetBusinessActivityLogsFileSizeController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/business/activitylogs/size/",{business_id:{type:"FBID",required:!0},start_time:{type:"Int",required:!0},end_time:{type:"Int",required:!0}})}),null);
__d("XAdsEventsManagerDataSourceGKCheckController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/events_manager/data_source_gk/",{data_source_id:{type:"FBID",required:!0},gk_name_list:{type:"StringVector",required:!0},log_exposure:{type:"Bool",defaultValue:!1}})}),null);
__d("XAdsBugReportSubmitController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/ajax/bugs/submit/",{account_id:{type:"Int"},ad_object_identifier:{type:"String"},ad_objective:{type:"String"},attached_files:{type:"StringVector"},audience_id:{type:"String"},biz_site_page_type:{type:"String"},business_id:{type:"Int"},business_emails:{type:"StringVector"},category:{type:"String",required:!0},conversion_pixel_id:{type:"String"},description:{type:"String",defaultValue:""},page_id:{type:"Int"},permission_to_login_as:{type:"Bool",defaultValue:!1},post_id:{type:"Int"},post_url:{type:"String"},product:{type:"String"},session_id:{type:"String"},source:{type:"Enum",defaultValue:"unknown",enumType:1},sub_category:{type:"String"},third_category:{type:"Enum",enumType:1},url_tag_or_view_tag:{type:"String"},screenshot_data_uris:{type:"StringVector"}})}),null);
__d("XPagesManagerFeaturedItemsCountController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/content_tab/featured_items_count/",{})}),null);
__d("XDeviceClassRealtimeController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/web_perf/get_perf_level/",{})}),null);
__d("XAdsManagerLeadGenAutoGenFormDataController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/manager/get_lead_gen_auto_form/",{})}),null);
__d("XRightsManagerCAEMigrationController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/rights_manager/creators/migrate/",{})}),null);
__d("XInstantGamesFriendsWhoPlayQueryController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/instantgames/friends_who_play/query/",{app_id:{type:"FBID",required:!0},value:{type:"String",defaultValue:""},result_count:{type:"Int",defaultValue:20}})}),null);
__d("XInstantGamesThreadListQueryController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/instantgames/search/threads/",{value:{type:"String",defaultValue:""},min_size:{type:"Int"},max_size:{type:"Int"}})}),null);
__d("XPagesManagerInboxFacebookPostController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/inbox/fb_post/",{privacy_mutation_token:{type:"String"}})}),null);
__d("XPagesManagerProductPhotoUploadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/upload/file/product/photo/",{waterfall_id:{type:"String"}})}),null);
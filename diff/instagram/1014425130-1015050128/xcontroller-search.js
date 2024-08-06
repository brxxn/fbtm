// new lines (count = 8):

__d("XPartnersOxsightsCMSAssetPermalinkController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/actionable_insights/cms/asset/{id}/",{carrier_id:{type:"Int"},portal:{type:"Enum",enumType:1},ref:{type:"Enum",enumType:1},partner_id:{type:"Int"},id:{type:"String",required:!0},file_name:{type:"String"},nav_ref:{type:"String"}})}),null);
__d("XPartnersOxsightsCMSAssetPermalinkController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/actionable_insights/cms/asset/{id}/",{carrier_id:{type:"Int"},portal:{type:"Enum",enumType:1},ref:{type:"Enum",enumType:1},partner_id:{type:"Int"},id:{type:"String",required:!0},file_name:{type:"String"},nav_ref:{type:"String"}})}),null);
__d("XDeveloperExplorerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/tools/explorer/{?app_id}/",{classic:{type:"Int"},method:{type:"String"},path:{type:"String"},fields:{type:"StringVector"},session_id:{type:"Int"},version:{type:"String"},app_id:{type:"Int"},from_bug_tool:{type:"Exists",defaultValue:!1},access_token:{type:"String"},domain:{type:"String"}})}),null);
__d("XBusinessSSOMigrationLoginController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/business/user/sso/migration/login/",{business_user_id:{type:"FBID",required:!0},csrf_state:{type:"String",required:!0},enterprise_id:{type:"FBID",required:!0},is_user_opted_in_for_multi_step_migration:{type:"Bool",defaultValue:!1},migration_flow_session_id:{type:"String"},is_work_accounts:{type:"Bool",defaultValue:!1},request_id:{type:"String"},external_business_user_ids_to_migrate:{type:"FBIDKeyset"},opt_in_siep:{type:"Bool",defaultValue:!1},opt_in_blueprint:{type:"Bool",defaultValue:!1}})}),null);
__d("XBizSuiteController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/latest/{?*rest}",{rest:{type:"String"},bpn_id:{type:"FBID"},open_app_id:{type:"FBID"},search_query:{type:"String"},global_scope_id:{type:"FBID"},business_id:{type:"FBID"},business_content_id:{type:"FBID"},asset_id:{type:"FBID"},creative_id:{type:"FBID"},creative_ids:{type:"FBIDVector"},content_id:{type:"FBID"},post_id:{type:"FBID"},campaign_id:{type:"FBID"},boost_id:{type:"FBID"},project_id:{type:"FBID"},creator_id:{type:"FBID"},deal_id:{type:"String"},asset_ids:{type:"FBIDVector"},nav_id:{type:"String"},view:{type:"Enum",enumType:1},nav_ref:{type:"String"},code:{type:"FBID"},offsite_email_onboard_status:{type:"Enum",enumType:1},offsite_email_onboard_source_feature:{type:"Enum",enumType:1},order_id:{type:"FBID"},selected_item_id:{type:"String"},new_item_id:{type:"String"},boosted_auto_open:{type:"Bool",defaultValue:!1},auto_open_saved_replies:{type:"Bool",defaultValue:!1},auto_open_order_tip:{type:"Bool",defaultValue:!1},automation_template:{type:"String"},automation_id:{type:"FBID"},verify_sender_email_id:{type:"String"},ref:{type:"String"},selected_segment_id:{type:"String"},auto_open_promote:{type:"Bool",defaultValue:!1},launch_notifications:{type:"Bool",defaultValue:!1},launch_onboarding:{type:"Bool",defaultValue:!1},ig_user_igid:{type:"FBID"},partnership_messages:{type:"Bool",defaultValue:!1},ig_media_id:{type:"String"},object_id:{type:"FBID"},time_range:{type:"String"},composer_action:{type:"Enum",enumType:1},entry_exp:{type:"String"},fb_reel_id:{type:"String"},videolist_id:{type:"String"},series_id:{type:"String"},season_id:{type:"String"},rm_applied_custom_filters:{type:"String"},ab_test_type:{type:"String"},content_table:{type:"Enum",enumType:1},modal:{type:"String"},thread_id:{type:"String"},ls_thread_key:{type:"String"},thread_type:{type:"Enum",enumType:1},hashtags:{type:"StringVector"},preload_video_id:{type:"String"},p2r_graphql_story_id:{type:"String"},preloaded_with_autodraft:{type:"Bool",defaultValue:!1},unified_composer_mode:{type:"Enum",defaultValue:"REEL",enumType:1},verification_type:{type:"Enum",enumType:1},isrc_id:{type:"FBID"},subpage_tab:{type:"String"},artist_list:{type:"FBID"},country_codes:{type:"StringSet"},music_sources:{type:"StringSet"},open_mta_sidesheet:{type:"String"},video_id:{type:"FBID"},so:{type:"String"},content_ids:{type:"FBIDVector"},source:{type:"Enum",enumType:1},selected_request_id:{type:"FBID"},enforced_content_id:{type:"FBID"},brp_asset_id:{type:"FBID"},mailbox_id:{type:"String"},should_open_edit_fb_profile:{type:"Bool",defaultValue:!1},profile_completeness_step:{type:"String"},bm_redirect_migration:{type:"String"},guidance_filter:{type:"String"}})}),null);
__d("XDeveloperAppController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/apps/{app_id}/{?page}/{?tab}/{?view}/",{business_id:{type:"Int"},sub_tab:{type:"String"},app_id:{type:"Int",required:!0},page:{type:"Enum",enumType:1},tab:{type:"String"},view:{type:"String"},use_case_enum:{type:"Enum",enumType:1},add_on_enum:{type:"Enum",enumType:1},placement_id:{type:"Int"},active_placements_offset:{type:"Int"},disabled_placements_offset:{type:"Int"},blocked_placements_offset:{type:"Int"},alert_id:{type:"Int"},ref:{type:"String"},id:{type:"Int"},app_locale:{type:"String"},a_n:{type:"String"},c_n:{type:"String"},access_token:{type:"String"},new_app_email_pending:{type:"Exists",defaultValue:!1},show_messenger_webhook_errors:{type:"Exists",defaultValue:!1},is_go_live_modal_shown:{type:"Bool",defaultValue:!1},submission_id:{type:"FBID"},duc_app_ids:{type:"FBIDVector"},dev_listing_id:{type:"FBID"},phone_number_id:{type:"Int"},product_route:{type:"Enum",enumType:1}})}),null);
__d("XAdsEventsManagerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/events_manager2/",{privacy_mutation_token:{type:"String"},act:{type:"Int"},business_id:{type:"FBID"},global_scope_id:{type:"FBID"},conversion_ids:{type:"FBIDVector"},data_source_id:{type:"FBID"},data_source_type:{type:"String"},dialog:{type:"String"},nav_source:{type:"String"},rest:{type:"String"},view:{type:"String"},eligibility_check_result:{type:"String"},ads_objective:{type:"Enum",enumType:1},universal_link_uri:{type:"String"},origin:{type:"String"},optimization:{type:"Enum",enumType:1},event_name:{type:"String"},event_view:{type:"Enum",enumType:1},verify_event_name_id:{type:"FBID"},show_skan_aem_reporting_discrepancy_modal:{type:"String"},show_sensitive_parameter_modal:{type:"String"},show_categories_modal:{type:"String"},crm:{type:"String"}})}),null);
__d("XWebBloksDebugMetadataController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/wbloks/debug/metadata/",{id:{type:"String",required:!0},debug_tooling_metadata_token:{type:"String"}})}),null);

// old lines (count = 32)

__d("XMediaManagerFanStickerPropsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/media/manager/fan_sticker_props/",{})}),null);
__d("XAdsEventsManagerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/events_manager2/",{privacy_mutation_token:{type:"String"},act:{type:"Int"},business_id:{type:"FBID"},global_scope_id:{type:"FBID"},conversion_ids:{type:"FBIDVector"},data_source_id:{type:"FBID"},data_source_type:{type:"String"},dialog:{type:"String"},nav_source:{type:"String"},rest:{type:"String"},view:{type:"String"},eligibility_check_result:{type:"String"},ads_objective:{type:"Enum",enumType:1},universal_link_uri:{type:"String"},origin:{type:"String"},optimization:{type:"Enum",enumType:1},event_name:{type:"String"},event_view:{type:"Enum",enumType:1},verify_event_name_id:{type:"FBID"},show_skan_aem_reporting_discrepancy_modal:{type:"String"},show_sensitive_parameter_modal:{type:"String"},crm:{type:"String"}})}),null);
__d("XDeveloperAppController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/apps/{app_id}/{?page}/{?tab}/{?view}/",{business_id:{type:"Int"},query_string:{type:"String"},app_id:{type:"Int",required:!0},page:{type:"Enum",enumType:1},tab:{type:"String"},view:{type:"String"},use_case_enum:{type:"Enum",enumType:1},add_on_enum:{type:"Enum",enumType:1},placement_id:{type:"Int"},active_placements_offset:{type:"Int"},disabled_placements_offset:{type:"Int"},blocked_placements_offset:{type:"Int"},alert_id:{type:"Int"},ref:{type:"String"},id:{type:"Int"},app_locale:{type:"String"},a_n:{type:"String"},c_n:{type:"String"},access_token:{type:"String"},new_app_email_pending:{type:"Exists",defaultValue:!1},show_messenger_webhook_errors:{type:"Exists",defaultValue:!1},is_go_live_modal_shown:{type:"Bool",defaultValue:!1},submission_id:{type:"FBID"},duc_app_ids:{type:"FBIDVector"},dev_listing_id:{type:"FBID"},phone_number_id:{type:"Int"},product_route:{type:"Enum",enumType:1}})}),null);
__d("XEditAppSettingsAsyncDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/settings/applications/edit_app_settings/",{__asyncDialog:{type:"Int"},app_id:{type:"Int",required:!0},redirect_after_uninstall:{type:"Bool",defaultValue:!1},reload_after:{type:"Bool",defaultValue:!0},surface:{type:"Enum",defaultValue:"applications",enumType:1},ref:{type:"Enum",enumType:1},page_id:{type:"FBID"}})}),null);
__d("XMediaManagerLibertyOptOutController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/media/manager/opt-out/",{})}),null);
__d("XBizWebCometBizSuiteAppointmentsCalendarController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/latest/appointments/appointments_calendar/",{global_scope_id:{type:"FBID"},business_id:{type:"FBID"},asset_id:{type:"FBID"},asset_ids:{type:"FBIDVector"},nav_id:{type:"String"},nav_ref:{type:"String"},bm_redirect_migration:{type:"String"},bpn_id:{type:"FBID"},appointmentID:{type:"FBID"},defaultTab:{type:"String"},view:{type:"String"}})}),null);
__d("XBusinessSSOMigrationLoginController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/business/user/sso/migration/login/",{business_user_id:{type:"FBID",required:!0},csrf_state:{type:"String",required:!0},enterprise_id:{type:"FBID",required:!0},is_user_opted_in_for_multi_step_migration:{type:"Bool",defaultValue:!1},migration_flow_session_id:{type:"String"},is_work_accounts:{type:"Bool",defaultValue:!1},request_id:{type:"String"},external_business_user_ids_to_migrate:{type:"FBIDKeyset"},opt_in_siep:{type:"Bool",defaultValue:!1}})}),null);
__d("XMediaManagerInstagramAccountOAuthUpdateController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/media_manager/instagram/oauthlink/update/",{})}),null);
__d("XMediaManagerPublishDogfoodedPlaylistsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/media/manager/playlists/publish_dogfooded/",{playlist_ids:{type:"FBIDVector",required:!0}})}),null);
__d("XBizSuiteController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/latest/{?*rest}",{rest:{type:"String"},bpn_id:{type:"FBID"},open_app_id:{type:"FBID"},search_query:{type:"String"},global_scope_id:{type:"FBID"},business_id:{type:"FBID"},business_content_id:{type:"FBID"},asset_id:{type:"FBID"},creative_id:{type:"FBID"},creative_ids:{type:"FBIDVector"},content_id:{type:"FBID"},post_id:{type:"FBID"},campaign_id:{type:"FBID"},boost_id:{type:"FBID"},project_id:{type:"FBID"},creator_id:{type:"FBID"},deal_id:{type:"String"},asset_ids:{type:"FBIDVector"},nav_id:{type:"String"},view:{type:"Enum",enumType:1},nav_ref:{type:"String"},code:{type:"FBID"},offsite_email_onboard_status:{type:"Enum",enumType:1},offsite_email_onboard_source_feature:{type:"Enum",enumType:1},order_id:{type:"FBID"},selected_item_id:{type:"String"},new_item_id:{type:"String"},boosted_auto_open:{type:"Bool",defaultValue:!1},auto_open_saved_replies:{type:"Bool",defaultValue:!1},auto_open_order_tip:{type:"Bool",defaultValue:!1},automation_template:{type:"String"},automation_id:{type:"FBID"},verify_sender_email_id:{type:"String"},ref:{type:"String"},selected_segment_id:{type:"String"},auto_open_promote:{type:"Bool",defaultValue:!1},launch_notifications:{type:"Bool",defaultValue:!1},launch_onboarding:{type:"Bool",defaultValue:!1},ig_user_igid:{type:"FBID"},partnership_messages:{type:"Bool",defaultValue:!1},ig_media_id:{type:"String"},object_id:{type:"FBID"},time_range:{type:"String"},composer_action:{type:"Enum",enumType:1},entry_exp:{type:"String"},fb_reel_id:{type:"String"},videolist_id:{type:"String"},series_id:{type:"String"},season_id:{type:"String"},rm_applied_custom_filters:{type:"String"},ab_test_type:{type:"String"},content_table:{type:"Enum",enumType:1},modal:{type:"String"},thread_id:{type:"String"},thread_type:{type:"Enum",enumType:1},hashtags:{type:"StringVector"},preload_video_id:{type:"String"},p2r_graphql_story_id:{type:"String"},preloaded_with_autodraft:{type:"Bool",defaultValue:!1},unified_composer_mode:{type:"Enum",defaultValue:"REEL",enumType:1},verification_type:{type:"Enum",enumType:1},isrc_id:{type:"FBID"},subpage_tab:{type:"String"},artist_list:{type:"FBID"},country_codes:{type:"StringSet"},music_sources:{type:"StringSet"},open_mta_sidesheet:{type:"String"},video_id:{type:"FBID"},so:{type:"String"},content_ids:{type:"FBIDVector"},source:{type:"Enum",enumType:1},selected_request_id:{type:"FBID"},enforced_content_id:{type:"FBID"},brp_asset_id:{type:"FBID"},mailbox_id:{type:"String"},should_open_edit_fb_profile:{type:"Bool",defaultValue:!1},profile_completeness_step:{type:"String"},bm_redirect_migration:{type:"String"}})}),null);
__d("XMediaManagerSettingsTabUserSearchTypeaheadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/media/manager/settings/user_search_typeahead/",{q:{type:"String",defaultValue:""},business_id:{type:"FBID"}})}),null);
__d("XMediaManagerInstagramUnlinkController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/media/manager/instagram/unlink/",{})}),null);
__d("XPartnersOxsightsNISubcityPolygonDataController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/actionable_insights/situs/polygon_data/",{carrier_id:{type:"Int"},portal:{type:"Enum",enumType:1},ref:{type:"Enum",enumType:1},partner_id:{type:"Int"}})}),null);
__d("XPartnersOxsightsSegmentPredictionController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/actionable_insights/mi/segment_prediction/",{carrier_id:{type:"Int"},portal:{type:"Enum",enumType:1},ref:{type:"Enum",enumType:1},partner_id:{type:"Int"}})}),null);
__d("XPartnersOxsightsMSLocationByFilterController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/actionable_insights/metric_system/location_by_filter/",{carrier_id:{type:"Int"},portal:{type:"Enum",enumType:1},ref:{type:"Enum",enumType:1},partner_id:{type:"Int"}})}),null);
__d("XPartnersOxsightsCMSAssetPermalinkController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/actionable_insights/cms/asset/{id}/",{carrier_id:{type:"Int"},portal:{type:"Enum",enumType:1},ref:{type:"Enum",enumType:1},partner_id:{type:"Int"},id:{type:"String",required:!0},file_name:{type:"String"}})}),null);
__d("XWoodhengePixelEventController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/fanfundingpixelevent/",{privacy_mutation_token:{type:"String"},event:{type:"String",required:!0},creator_id:{type:"Int",required:!0}})}),null);
__d("XWoodhengeMockTrialMutationAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/fan_funding/async/mock_trial/",{page_id:{type:"FBID",required:!0}})}),null);
__d("XMediaManagerFeedbackDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/creator/studio/feedback/",{__asyncDialog:{type:"Int"}})}),null);
__d("XAdsDCOVideoPreviewPlayerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/mobile_first_creative/accent_color/",{})}),null);
__d("XInstreamReservedBuyingStatusUpdateController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ad_breaks/instream_reserved_buying/status_update/",{publisher_id:{type:"FBID",required:!0},new_status:{type:"Enum",required:!0,enumType:1}})}),null);
__d("XDeveloperExplorerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/tools/explorer/{?app_id}/",{classic:{type:"Int"},method:{type:"String"},path:{type:"String"},fields:{type:"StringVector"},session_id:{type:"Int"},version:{type:"String"},app_id:{type:"Int"},from_bug_tool:{type:"Exists",defaultValue:!1},access_token:{type:"String"}})}),null);
__d("XWebBloksDebugMetadataController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/wbloks/debug/metadata/",{id:{type:"String",required:!0}})}),null);
__d("XBoostedComponentFetchSpecsDataController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/boosted_components/fetch_specs_data/",{boost_id:{type:"FBID",required:!0}})}),null);
__d("XVideoAssetsExpireRemoveSharingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video/video_asset/expire/remove_sharing/",{video_asset_id:{type:"FBID",required:!0},source:{type:"Enum",required:!0,enumType:1}})}),null);
__d("XPartnersOxsightsNISubcityPolygonDataController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/actionable_insights/situs/polygon_data/",{carrier_id:{type:"Int"},portal:{type:"Enum",enumType:1},ref:{type:"Enum",enumType:1},partner_id:{type:"Int"}})}),null);
__d("XPartnersOxsightsSegmentPredictionController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/actionable_insights/mi/segment_prediction/",{carrier_id:{type:"Int"},portal:{type:"Enum",enumType:1},ref:{type:"Enum",enumType:1},partner_id:{type:"Int"}})}),null);
__d("XPartnersOxsightsMSLocationByFilterController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/actionable_insights/metric_system/location_by_filter/",{carrier_id:{type:"Int"},portal:{type:"Enum",enumType:1},ref:{type:"Enum",enumType:1},partner_id:{type:"Int"}})}),null);
__d("XPartnersOxsightsCMSAssetPermalinkController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/actionable_insights/cms/asset/{id}/",{carrier_id:{type:"Int"},portal:{type:"Enum",enumType:1},ref:{type:"Enum",enumType:1},partner_id:{type:"Int"},id:{type:"String",required:!0},file_name:{type:"String"}})}),null);
__d("XFanSubsCreatorEmailDownloadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/subscriptions/creator/download/{page_id}/",{page_id:{type:"FBID",required:!0}})}),null);
__d("XCloudGamePlayerInviteSearchQueryController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/gameservicescloud/playerinvite/search/player/",{value:{type:"String",defaultValue:""},app_id:{type:"String",defaultValue:""}})}),null);
__d("XServicesMessengerAppointmentNUXController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/services_vertical/messenger_appointment_nux/",{})}),null);
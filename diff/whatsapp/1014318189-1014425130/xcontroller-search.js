// new lines (count = 3):

__d("XCoSTLoadOnsiteShopsDataController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/act/cost/shop_data/",{ad_account_id:{type:"Int",required:!0},pixel_id:{type:"FBID",required:!0}})}),null);
__d("XDeveloperAppController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/apps/{app_id}/{?page}/{?tab}/{?view}/",{business_id:{type:"Int"},query_string:{type:"String"},app_id:{type:"Int",required:!0},page:{type:"Enum",enumType:1},tab:{type:"String"},view:{type:"String"},use_case_enum:{type:"Enum",enumType:1},add_on_enum:{type:"Enum",enumType:1},placement_id:{type:"Int"},active_placements_offset:{type:"Int"},disabled_placements_offset:{type:"Int"},blocked_placements_offset:{type:"Int"},alert_id:{type:"Int"},ref:{type:"String"},id:{type:"Int"},app_locale:{type:"String"},a_n:{type:"String"},c_n:{type:"String"},access_token:{type:"String"},new_app_email_pending:{type:"Exists",defaultValue:!1},show_messenger_webhook_errors:{type:"Exists",defaultValue:!1},is_go_live_modal_shown:{type:"Bool",defaultValue:!1},submission_id:{type:"FBID"},duc_app_ids:{type:"FBIDVector"},dev_listing_id:{type:"FBID"},phone_number_id:{type:"Int"},product_route:{type:"Enum",enumType:1}})}),null);
__d("XACOAssetManagerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/ad_preview/aco/",{ad_account_id:{type:"FBID",required:!0},image_hash:{type:"String"},image_url:{type:"String"},headline:{type:"String"},epa_post_id:{type:"FBID"},ad_creative_optimization_type:{type:"Enum",required:!0,enumType:0},ad_creative_optimization_option_value:{type:"Enum",required:!0,enumType:0},trigger_async_gen_transform:{type:"Bool",defaultValue:!0}})}),null);

// old lines (count = 8)

__d("XCoSTLoadOnsiteShopsDataController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/act/cost/shop_data/",{ad_account_id:{type:"Int",required:!0},pixel_id:{type:"FBID"}})}),null);
__d("XMediaManagerInstagramUserSourceController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/media/manager/instagram_composer/user_source/",{ig_shadow_user_id:{type:"String",required:!0}})}),null);
__d("XMessengerDotComSpoofIFrameController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/spoof/fb_iframe_target/",{gk_spoof:{type:"String"}})}),null);
__d("XSpoofMessengerDotComIFrameController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/spoof/messenger_dot_com_iframe/",{redirect_uri:{type:"String",required:!0}})}),null);
__d("XRightsManagerChangeLogDocAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/CMS Root/Intellectual Property/Blueprint/",{page_id:{type:"FBID",required:!0}})}),null);
__d("XACOAssetManagerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/ad_preview/aco/",{ad_account_id:{type:"FBID",required:!0},image_hash:{type:"String"},image_url:{type:"String"},headline:{type:"String"},ad_creative_optimization_type:{type:"Enum",required:!0,enumType:0},ad_creative_optimization_option_value:{type:"Enum",required:!0,enumType:0},trigger_async_gen_transform:{type:"Bool",defaultValue:!0}})}),null);
__d("XRightsManagerImportVideosProgressController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/rights_manager/reference_files/import/progress/",{})}),null);
__d("XDeveloperAppController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/apps/{app_id}/{?page}/{?tab}/{?view}/{?*rest}/",{business_id:{type:"Int"},query_string:{type:"String"},app_id:{type:"Int",required:!0},page:{type:"Enum",enumType:1},tab:{type:"String"},view:{type:"String"},rest:{type:"String"},use_case_enum:{type:"Enum",enumType:1},add_on_enum:{type:"Enum",enumType:1},placement_id:{type:"Int"},active_placements_offset:{type:"Int"},disabled_placements_offset:{type:"Int"},blocked_placements_offset:{type:"Int"},alert_id:{type:"Int"},ref:{type:"String"},id:{type:"Int"},app_locale:{type:"String"},a_n:{type:"String"},c_n:{type:"String"},access_token:{type:"String"},new_app_email_pending:{type:"Exists",defaultValue:!1},show_messenger_webhook_errors:{type:"Exists",defaultValue:!1},is_go_live_modal_shown:{type:"Bool",defaultValue:!1},submission_id:{type:"FBID"},duc_app_ids:{type:"FBIDVector"},dev_listing_id:{type:"FBID"},phone_number_id:{type:"Int"},product_route:{type:"Enum",enumType:1}})}),null);
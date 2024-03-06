// new lines (count = 1):

__d("XClickToJoinAdsEligibleChannelsAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/click_to_join_ads/eligible_channels/",{instagram_actor_id:{type:"FBID",required:!0},page_id:{type:"FBID",required:!0}})}),null);

// old lines (count = 4)

__d("XClickToJoinAdsEligibleChannelsAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/click_to_join_ads/eligible_channels/",{instagram_actor_id:{type:"FBID",required:!0}})}),null);
__d("XAdvertiserEnforcementModalController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/accountquality/enforcement_modal/",{surface:{type:"Enum",required:!0,enumType:1},account_id:{type:"FBID"},is_creation_flow:{type:"Bool",defaultValue:!1}})}),null);
__d("XAdsCouponOfferLWIEnrollDataController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/coupon/enroll/offer_data/",{ad_account_id:{type:"FBID"},coupon_offer_id:{type:"FBID",required:!0},placement:{type:"String",required:!0},client_app_id:{type:"FBID"},channel_name:{type:"String"},tip_name:{type:"String"}})}),null);
__d("XAdsGrowthCouponImpressionController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/coupon/impression_and_enroll/offer_data/",{ad_account_id:{type:"FBID"},placement:{type:"String"}})}),null);
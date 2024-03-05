// new lines (count = 1):

__d("XMarketplacePostPermalinkController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/marketplace/item/{listing_id}/",{listing_id:{type:"FBID"},ref:{type:"String"},location_id:{type:"Int"},category_id:{type:"Int"},post_id:{type:"FBID"},search_query:{type:"String"},link_ref:{type:"String"},ad_id:{type:"String"},group_id:{type:"FBID"},hoisted_items:{type:"IntVector"},hoisted:{type:"Bool",defaultValue:!1},tracking:{type:"String"},referral_code:{type:"String"},hoisted_story_ids:{type:"FBID"},hoisted_story_optimistic_data:{type:"String"}})}),null);

// old lines (count = 2)

__d("XMarketplacePostPermalinkController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/marketplace/item/{listing_id}/",{listing_id:{type:"FBID"},ref:{type:"String"},location_id:{type:"Int"},category_id:{type:"Int"},post_id:{type:"FBID"},search_query:{type:"String"},link_ref:{type:"String"},ad_id:{type:"String"},group_id:{type:"FBID"},hoisted_items:{type:"IntVector"},hoisted:{type:"Bool",defaultValue:!1},tracking:{type:"String"},referral_code:{type:"String"}})}),null);
__d("XBoostedComponentFetchLeadGenDataController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/boosted_components/fetch_lead_gen_data/",{lead_gen_data_id:{type:"FBID",required:!0},page_id:{type:"FBID",required:!0}})}),null);
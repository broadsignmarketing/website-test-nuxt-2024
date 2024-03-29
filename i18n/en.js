import blog from "~/i18n/en/blog.json";
import campaignPlanningAdServing from "~/i18n/en/campaign-planning-ad-serving.json";
import contentNetworkManagement from "~/i18n/en/content-network-management.json";
import globalProgrammaticSSP from "~/i18n/en/global-programmatic-ssp.json";
import index from "~/i18n/en/index.json";
import localSignageMessaging from "~/i18n/en/local-signage-messaging.json";
import staticCampaigns from "~/i18n/en/static-campaigns.json";

export default defineI18nLocale(async (locale) => {
	return {
		blog: blog,
		"campaign-planning-ad-serving": campaignPlanningAdServing,
		"content-network-management": contentNetworkManagement,
		"global-programmatic-ssp": globalProgrammaticSSP,
		index: index,
		"local-signage-messaging": localSignageMessaging,
		"static-campaigns": staticCampaigns,
	};
});

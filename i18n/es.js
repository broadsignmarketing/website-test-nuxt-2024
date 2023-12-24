import campaignPlanningAdServing from "~/i18n/es/campaign-planning-ad-serving.json";
import contentNetworkManagement from "~/i18n/es/content-network-management.json";
import globalProgrammaticSSP from "~/i18n/es/global-programmatic-ssp.json";
import index from "~/i18n/es/index.json";
import localSignageMessaging from "~/i18n/es/local-signage-messaging.json";
import staticCampaigns from "~/i18n/es/static-campaigns.json";

export default defineI18nLocale(async (locale) => {
	return {
		"campaign-planning-ad-serving": campaignPlanningAdServing,
		"content-network-management": contentNetworkManagement,
		"global-programmatic-ssp": globalProgrammaticSSP,
		index: index,
		"local-signage-messaging": localSignageMessaging,
		"static-campaigns": staticCampaigns,
	};
});

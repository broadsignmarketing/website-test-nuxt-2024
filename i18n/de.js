import campaignPlanningAdServing from "~/i18n/de/campaign-planning-ad-serving.json";
import contentNetworkManagement from "~/i18n/de/content-network-management.json";
import globalProgrammaticSSP from "~/i18n/de/global-programmatic-ssp.json";
import index from "~/i18n/de/index.json";
import localSignageMessaging from "~/i18n/de/local-signage-messaging.json";
import staticCampaigns from "~/i18n/de/static-campaigns.json";

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

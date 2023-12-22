import campaignPlanningAdServing from "~/i18n/ja/campaign-planning-ad-serving.json";
import contentNetworkManagement from "~/i18n/ja/content-network-management.json";
import globalProgrammaticSSP from "~/i18n/ja/global-programmatic-ssp.json";
import index from "~/i18n/ja/index.json";
import localSignageMessaging from "~/i18n/ja/local-signage-messaging.json";
import staticCampaigns from "~/i18n/ja/static-campaigns.json";

export default defineI18nLocale(async (locale) => {
	return {
		campaignPlanningAdServing,
		contentNetworkManagement,
		globalProgrammaticSSP,
		index,
		localSignageMessaging,
		staticCampaigns,
	};
});

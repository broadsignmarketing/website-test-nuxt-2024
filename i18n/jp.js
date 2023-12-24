import campaignPlanningAdServing from "~/i18n/jp/campaign-planning-ad-serving.json";
import contentNetworkManagement from "~/i18n/jp/content-network-management.json";
import globalProgrammaticSSP from "~/i18n/jp/global-programmatic-ssp.json";
import index from "~/i18n/jp/index.json";
import localSignageMessaging from "~/i18n/jp/local-signage-messaging.json";
import staticCampaigns from "~/i18n/jp/static-campaigns.json";

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

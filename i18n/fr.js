import campaignPlanningAdServing from "~/i18n/fr/campaign-planning-ad-serving.json";
import contentNetworkManagement from "~/i18n/fr/content-network-management.json";
import globalProgrammaticSSP from "~/i18n/fr/global-programmatic-ssp.json";
import index from "~/i18n/fr/index.json";
import localSignageMessaging from "~/i18n/fr/local-signage-messaging.json";
import staticCampaigns from "~/i18n/fr/static-campaigns.json";

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

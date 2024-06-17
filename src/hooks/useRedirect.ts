import { useRoute, useRouter } from "vue-router";
import { useConfigStore } from "../store";
import { AppRoute } from "../config";
import { watch } from "vue";

export const useRedirect = () => {
  const config = useConfigStore();
  const route = useRoute();
  const router = useRouter();

  const index = config.NavLinks.reduce((a, b, i) => {
    if (b[0].toLowerCase() === route.name?.toString().toLowerCase()) {
      return i;
    }
    return a;
  }, -1);

  watch(
    () => config.NavLinks[index][1].visible,
    (newVal) => {
      if (!newVal) router.push(AppRoute.Main.route);
    },
    { immediate: true },
  );
};

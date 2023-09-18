import * as Updates from "expo-updates";

export default async function ChekForUpdates() {
  try {
    if (!__DEV__) {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        const DownloadChanges = await Updates.fetchUpdateAsync();
        if (DownloadChanges.isNew) await Updates.reloadAsync();
      }
      return update.isAvailable;
    }
    return false;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
}

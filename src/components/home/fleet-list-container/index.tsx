import { Box, CircularProgress, Container } from "@mui/material";
import { FC } from "react";
import { useEffectOnce } from "react-use";
import { Fleet } from "../../../models/fleet";
import { EmptyState } from "../empty-state";
import { FleetList } from "../fleet-list";
import { useFleetList } from "../hooks";

/**
 * 保存されている編成が存在するか
 */
const checkExistFleetList = (fleets: Fleet[]) => {
  return fleets.length !== 0;
};

export const FleetListContainer: FC = () => {
  // const { data: signInCheckResult } = useSigninCheck();
  const { data: fleetList, mutate: mutateFleetList } = useFleetList();

  // 現在のリストへの更新検知を避けた参照
  // fleetDocsChangeCallback 内で使用
  // const fleetsRef = useRef<Fleet[]>(fleetList ?? []);
  // useEffect(() => {
  //   fleetList && (fleetsRef.current = fleetList);
  // }, [fleetList]);

  // const fleetDocsChangeCallback = useCallback(
  //   (snap: QuerySnapshot<Fleet>) => {
  //     let result = fleetsRef.current;

  //     snap.docChanges().forEach((change) => {
  //       const data = change.doc.data();

  //       if (change.type === "added") {
  //         // 取得済みのデータがある場合更新
  //         if (result.some((v) => v.id === change.doc.id)) {
  //           result = result.map((v) => (v.id === data.id ? data : v));
  //         } else {
  //           result = [...result, data];
  //         }
  //       }

  //       if (change.type === "modified")
  //         result = result.map((v) => (v.id === data.id ? data : v));

  //       if (change.type === "removed")
  //         result = result.filter((v) => !(v.id === data.id));
  //     });

  //     mutateFleetList(result);
  //   },
  //   [mutateFleetList]
  // );

  // useEffect(() => {
  //   let unsubscribe: Unsubscribe | undefined = undefined;

  //   if (signInCheckResult.signedIn) {
  //     unsubscribe = listenUserFleetDocs(
  //       signInCheckResult.user,
  //       fleetDocsChangeCallback
  //     );
  //   }

  //   return () => unsubscribe?.();
  // }, [
  //   fleetDocsChangeCallback,
  //   mutateFleetList,
  //   signInCheckResult.signedIn,
  //   signInCheckResult.user,
  // ]);

  useEffectOnce(() => {
    mutateFleetList([]);
  });

  if (!fleetList) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <CircularProgress size={24} />
      </Box>
    );
  }

  // 保存されている編成が存在するか
  const isExistFleetList = checkExistFleetList(fleetList);

  return (
    <Container maxWidth="md" sx={{ height: "100%" }}>
      <Box
        display="flex"
        flexDirection="column"
        paddingTop={3}
        paddingBottom={3}
        height="100%"
      >
        {isExistFleetList ? (
          <FleetList fleetList={fleetList} />
        ) : (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <EmptyState />
          </Box>
        )}
      </Box>
    </Container>
  );
};

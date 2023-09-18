import Endpoints from "CORE/constants/Endpoints";
import useSWR from "swr";
import useSWRImmutable from "swr/immutable";

/// profile data query
// const ProfileQueries = () => {
//   return {
//     GetProfile: () => {
//       const swr = useSWRImmutable(
//         `${Endpoints.Profile}/home-info`,
//         GetProfileData
//       );
//       return swr;
//     },
//   };
// };
// export const useProfileQueries = ProfileQueries();

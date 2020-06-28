import request, {APIPATH} from '@/utils/request';

export async function getSysConfig() {
  return request(`${APIPATH}/sys/config`);
}

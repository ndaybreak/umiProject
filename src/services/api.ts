import request, {APIPATH} from '@/utils/request';

export async function getSysConfig() {
  return request(`${APIPATH}/sys/config`);
}

export async function getWxConfig() {
  return request(`${APIPATH}/config_params?url=${location.href.replace(location.hash, '')}`);
}

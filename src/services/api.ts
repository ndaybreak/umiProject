import request, {APIPATH} from '@/utils/request';
import {isIOS} from "@/utils/utils";

export async function getSysConfig() {
  return request(`${APIPATH}/sys/config`);
}

export async function getWxConfig() {
  const url = isIOS() ? sessionStorage.getItem('firstEnterUrl') : location.href.split('#')[0]
  return request(`${APIPATH}/config_params?url=${url}`);
}

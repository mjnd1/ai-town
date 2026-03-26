import { toast } from 'react-toastify';
import { t } from '../locales';

export async function toastOnError<T>(promise: Promise<T>): Promise<T> {
  try {
    return await promise;
  } catch (error: any) {
    toast.error(error?.message || t('frontend.toast.unknownError'));
    throw error;
  }
}

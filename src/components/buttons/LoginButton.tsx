import { SignInButton } from '@clerk/clerk-react';
import { t } from '../../../locales';

export default function LoginButton() {
  return (
    <SignInButton>
      <button className="button text-white shadow-solid">
        <div className="inline-block bg-clay-700">
          <span>{t('buttons.login')}</span>
        </div>
      </button>
    </SignInButton>
  );
}

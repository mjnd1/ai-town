import { useMutation, useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';
import Button from './buttons/Button';
import { t } from '../../locales';

export default function FreezeButton() {
  const stopAllowed = useQuery(api.testing.stopAllowed) ?? false;
  const defaultWorld = useQuery(api.world.defaultWorldStatus);

  const frozen = defaultWorld?.status === 'stoppedByDeveloper';

  const unfreeze = useMutation(api.testing.resume);
  const freeze = useMutation(api.testing.stop);

  const flipSwitch = async () => {
    if (frozen) {
      console.log(t('frontend.logs.unfreezeWorld'));
      await unfreeze();
    } else {
      console.log(t('frontend.logs.freezeWorld'));
      await freeze();
    }
  };

  return !stopAllowed ? null : (
    <>
      <Button
        onClick={flipSwitch}
        className="hidden lg:block"
        title={t('freeze.buttonTitle')}
        imgUrl="/assets/star.svg"
      >
        {frozen ? t('buttons.unfreeze') : t('buttons.freeze')}
      </Button>
    </>
  );
}

import React from 'react';
import { LockBody, Spinner, ReleaseBody, Picture } from './styles/loading';

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner>
      <LockBody>
        <Picture src={`/images/users/${src}.png`} />
      </LockBody>
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};

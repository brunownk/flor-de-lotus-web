import { useLoading } from '@hooks/useLoading';

import './styles.scss';

interface ContentLoaderProps {
  loading?: boolean;
  manual?: boolean;
}

export function ContentLoader({
  loading = false,
  manual = false,
}: ContentLoaderProps) {
  const { isLoading } = useLoading();

  const showLoader = manual ? loading : isLoading;

  return (
    <div
      id="content-loader-container"
      className={showLoader || isLoading ? 'loading' : ''}
    >
      <div className="content-loader">
        <div className="content-loader-bar" />
      </div>
    </div>
  );
}

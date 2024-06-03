import { useLoading } from '@hooks/useLoading';

import './styles.scss';

export function ContentLoader({ loading = false, manual = false }) {
  const { isLoading } = useLoading();

  const showLoader = manual ? loading : isLoading;

  return (
    <div id="content-loader-container" className={showLoader || isLoading ? 'loading' : ''}>
      <div className="content-loader">
        <div className="content-loader-bar"></div>
      </div>
    </div>
  )
}

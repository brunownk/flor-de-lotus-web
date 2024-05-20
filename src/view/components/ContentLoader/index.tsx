import { useLoading } from '@hooks/useLoading';

import './styles.scss';

export function ContentLoader() {
  const { isLoading } = useLoading();

  return (
    <div id="content-loader-container" className={isLoading ? 'loading' : ''}>
      <div className="content-loader">
        <div className="content-loader-bar"></div>
      </div>
    </div>
  )
}

import { useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';

import { Button } from '@components/Button';

import { GoBackProps } from './GoBack';

import './styles.scss';

export function GoBack({ to }: GoBackProps) {
  const navigate = useNavigate();

  return (
    <Button
      type="text"
      shape="circle"
      className="goback-button"
      onClick={() => to ? navigate(to) : navigate(-1)}
    >
      <MdArrowBackIos size={20} />
    </Button>
  );
}

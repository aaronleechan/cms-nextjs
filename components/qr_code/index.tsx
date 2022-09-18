import { QRCodeSVG } from 'qrcode.react';

const QRCodeGenerator = (props: any) => {
  const { url } = props;
  return (
    <>
      <QRCodeSVG
        value={url}
        size={128}
        bgColor={'#ffffff'}
        fgColor={'#000000'}
        level={'L'}
        includeMargin={false}
      />
    </>
  );
};

export default QRCodeGenerator;

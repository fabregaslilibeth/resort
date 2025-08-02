export interface PaymentOption {
  name: string;
  image: string;
}

export const paymentOptions: PaymentOption[] = [
  {
    name: 'GCash',
    image: '/images/payment/gcash.svg'
    
  },
  {
    name: 'WISE',
    image: '/images/payment/wise.svg'
  },
  {
    name: 'QRPh',
    image: '/images/payment/qr.svg'
  },
  {
    name: 'Maya',
    image: '/images/payment/maya.svg'
  },
  {
    name: 'UnionPay',
    image: '/images/payment/union.svg'
  },
  {
    name: 'Alipay',
    image: '/images/payment/ali.svg'
  },
  {
    name: 'WeChat Pay',
    image: '/images/payment/wechat-pay.svg'
  },
  {
    name: 'Other',
    image: '/images/payment/other.svg'
  }
]; 
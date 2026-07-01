import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Dễ sử dụng',
    description: 'Tài liệu được tổ chức rõ ràng theo từng chức năng nghiệp vụ.',
  },
  {
    title: 'Tương tác trực quan',
    description: 'Xem minh họa màn hình thực tế và các lưu ý thao tác khi hover.',
  },
  {
    title: 'Cập nhật liên tục',
    description: 'Nội dung được cập nhật theo phiên bản mới nhất của TPTLR.',
  },
];

function Feature({title, description}) {
  return (
    <div className="col col--4">
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

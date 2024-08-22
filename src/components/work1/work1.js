import React from 'react';

const styles = {
  body: {
    margin: 0,
    backgroundColor: 'black',
    maxWidth: '100%',
    flexDirection: 'column',
    // minHeight: '100vh',
    padding: '20px',
    display: 'flex',
  },
  title: {
    fontSize: '48px',
    lineHeight: '1.0834933333',
    fontWeight: 600,
    letterSpacing: '-0.003em',
    fontFamily: 'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  desc: {
    fontSize: '20px',
    lineHeight: '1.4705882353',
    fontWeight: 400,
    letterSpacing: '-0.022em',
    fontFamily: 'SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
    color: 'white',
    position: 'relative',
    // paddingBottom: '100px',
  },
  desc1: {
    margin: '150px auto 100px 120px',
    paddingRight: '800px',
  },
  desc2: {
    margin: '100px 100px 160px auto',
    paddingLeft: '800px',
  },
  desc3: {
    margin: '100px auto 0 100px',
    paddingRight: '800px',
    paddingBottom: '200px',
  },
  container: {
    paddingTop: '20px',
    paddingBottom: '20px',
    width: '202vh',
    // backgroundColor: 'rgba(227, 227, 227, 0.771)',
    border: 'none',
    borderRadius: '36px',
  },
  listsContainer: {
    width: '100%',
    marginLeft: '100px',
    marginTop: '-80px',
    display: 'flex',
    justifyContent: 'space-around',
  },
  list: {
    flex: 1,
    color: '#fff',
    fontSize: '20px',
    lineHeight: '1.4705882353',
    fontWeight: 400,
    letterSpacing: '-0.022em',
    fontFamily: 'SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
  },
  listTitle: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: '36px',
    lineHeight: '1.0834933333',
    fontWeight: 600,
    letterSpacing: '-0.003em',
    fontFamily: 'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
    margin: '50px 0 80px',
    paddingBottom: '50px',
    display: 'flex',
    color: '#fff',
    textTransform: 'uppercase',
  },
  sectionDivider: {
    width: '98%',
    height: '1.5px',
    backgroundColor: '#ad2d02',
    margin: '20px auto',
  },
  objectiveTitle: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: '36px',
    lineHeight: '1.0834933333',
    fontWeight: 600,
    letterSpacing: '-0.003em',
    fontFamily: 'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
    paddingBottom: '50px',
    margin: '50px',
    display: 'flex',
    color: '#fff',
    textTransform: 'uppercase',
  },
  li: {
    marginBottom: '10px',
  },
};

const Work1 = () => {
  return (
    <div style={styles.body}>
      <h1 style={styles.title}>title</h1>
      <h1 style={{ ...styles.desc, ...styles.desc1 }}>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on pu
      </h1>
      <h1 style={{ ...styles.desc, ...styles.desc2 }}>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on pu
      </h1>
      <h1 style={{ ...styles.desc, ...styles.desc3 }}>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on pu
      </h1>

      <div style={styles.sectionDivider}></div>

      <div style={styles.container}>
        <h1 style={styles.listTitle}>TECHNICAL STACK</h1>
        <div style={styles.listsContainer}>
          <div style={styles.list}>
            <ul>
              <li style={styles.li}>Item 1</li>
              <li style={styles.li}>Item 2</li>
              <li style={styles.li}>Item 3</li>
              <li style={styles.li}>Item 4</li>
              <li style={styles.li}>Item 5</li>
            </ul>
          </div>
          <div style={styles.list}>
            <ul>
              <li style={styles.li}>Item A</li>
              <li style={styles.li}>Item B</li>
              <li style={styles.li}>Item C</li>
              <li style={styles.li}>Item D</li>
              <li style={styles.li}>Item E</li>
            </ul>
          </div>
        </div>
        <div style={styles.sectionDivider}></div>
        <h1 style={styles.objectiveTitle}>OBJECTIVES</h1>
        <div style={styles.listsContainer}>
          <div style={styles.list}>
            <ul>
              <li style={styles.li}>Item 1</li>
              <li style={styles.li}>Item 2</li>
              <li style={styles.li}>Item 3</li>
              <li style={styles.li}>Item 4</li>
              <li style={styles.li}>Item 5</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work1;
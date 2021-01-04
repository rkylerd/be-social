import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import axios from 'axios'
import { localApi } from '../../config'

export default function User(props) {
    // create_blob(file, function(blob_string) { alert(blob_string) });

    // function create_blob(file, callback) {
    //     var reader = new FileReader();
    //     reader.onload = function() { callback(reader.result) };
    //     reader.readAsDataURL(file);
    // }
    console.log(props)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div id="user-page">
            
            <section id="profile-section">
                
                <div id="profile-left-side">
                        
                </div>
                <div>
                    
                    <div className="profile-middle-section">
                        <h2 className="handle-title"></h2>
                        <div id="dual-photos">
                            <div style={{overflow: 'hidden'}}>
                                <img id="profile-photo" src="" />
                            </div>
                            
                        </div>
                    </div>
                    <div style={{minWidth: '300px', margin: 'auto', justifyContent: 'center'}} className="col-3-profile">
                        <div id="profile-followers" className="profile-options">Followers</div>
                        <div  id="profile-feed" className="profile-options">Feed</div>
                        <div  id="profile-following" className="profile-options">Following</div>
                    </div>
                </div>
                <div id="profile-right-side"></div>
            </section>

            <div className="col-2">
                <section className="col-40-percent">
                    <div className="embedded-follow-container">
                        <div className="follow-container-title">Followers</div>
                        <div className="followers-img-grid"> 
                            <div className="person-follow">
                                <div className="cut-off-bottom"> 
                                
                                    {/* <img className="img-profile" src="" /> */}
                                </div>
                            </div>
                        </div>
                        <span className="follow-bottom-section">See all</span>
                    </div>
        
                    <div className="embedded-follow-container">
                        <div className="follow-container-title">Following</div>
                            <div className="followers-img-grid"> 
                                <div className="person-follow">
                                    <div className="cut-off-bottom"> 
                                        <img className="img-profile" />
                                    </div>
                                </div>
                        </div>
                        <span className="follow-bottom-section">See all</span>
                    </div>
                </section>
                    <section className="story">
                        
                        <div className="middle-column">
                            <div className="begin-post-container">
                                <textarea className="post-input" rows="6" column="10" v-model="post" placeholder="Enlighten the world with your inner-most thoughts here."></textarea>
                                <input type="text" style={{display: 'none'}} placeholder="Image URL here" id="onlineImageURL" className="post-input-small" />
                                <input type="text" style={{display: 'none'}} placeholder="Video URL here" id="onlineVideoURL" className="post-input-small" />
                                
                                <div className="post-container-options">
                                    <button className="status-btns" >Attach Online Content</button>
                                    <button className="status-btns">Attachment File</button>
                                    <input type="button" className="status-btns" value="Post" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="middle-column" v-for="status in orderedStatuses">
                            <div className="status">
                                <div style={{ width: '100%', borderBottom: 'solid 1px #222', display: 'flex', flexWrap: 'wrap'}}> 
                                        <div style={{overflow: 'hidden', margin: '6px', height: '50px', width: '50px', borderRadius: '50%'}}>
                                            <img style={{ minWidth: '100%', maxWidth: '150%', minHeight: '100%' }} />
                                        </div>
                                        <div>
                                            <h5 className="uniquePostEntry"></h5>
                                            <span className="see-post-alone">See post alone</span>
                                        </div>
                                    </div>
                                
                                <div className="post-output">
                                    <div className='attachments-container' v-for="attachment in status.attachments">
                                        <img className="img-attachment" />
                                        
                                    </div> 
                                    <span className="date-punch"></span>
                                </div>
                            </div>
                        </div>
                        
                    </section>
            
            </div>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps({
    req: {
        cookies
    },
    query: {
        count = ""
    },
    params: {
        uid = ""
    }
})
{
    const pagesize = 10;
    const id = 10;

    try {
        const { data: { posts = [] } = {} } = 
            await axios.get(
                `${localApi}users${uid ? `/${uid}` : ''}${pagesize ? `?pagesize=${pagesize}` : ''}`);
        return {
          props: {
              posts
          },
        }
    } catch (err) {
        return {
            props: {},
          }
    }

  }
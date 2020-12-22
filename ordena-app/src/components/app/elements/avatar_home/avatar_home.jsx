import React from 'react';
import { Avatar} from 'antd';

import { connect } from 'react-redux';

const AvatarHome = ({data_user}) => (
  <section>
  <div>
  <hr id='separator_avatar'/>
    <div className='avatar_list'>

    {
    data_user.map(d => (

            <div key={d.id} className='order_avatar'>
                <div>
                 <Avatar  className = 'avatar' src={d.icon} />
                </div>
                <div className='text_name'>
                  {d.name}
                </div>

            </div>
    ))
    }

      </div>
      <hr id='separator_avatar_bottom'/>
      <div className ='text_service_box'>
      <p className= 'text_service'>Atendido por el mesero Luis Perez</p>
      </div>
    </div>
  </section>
)

const mapStateToProps = state => ({
  data_user: state.data_user
})

const mapDispatchToProps = dispatch => ({})


export default connect(mapStateToProps, mapDispatchToProps)(AvatarHome);

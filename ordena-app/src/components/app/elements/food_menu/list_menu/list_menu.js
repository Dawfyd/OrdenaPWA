import { connect } from 'react-redux';

const TargetList = ({data_menu}) => (
  <section>
    <div>{
    data_menu.map(d => (
        <div key={d.id} className='card_list'>
          <div className='order_card'>
              <div>
                <img className='img_card' alt="example" src={d.photo} />
                </div>
            <div className='text'>
              <div>

                <div className='title'>
                  {d.text}
                </div>

                <div className='description'>
                  {d.msg}
                </div>

                <div className="cost">
                  ${d.price}
                </div>

              </div>
              <div className="plus">
                +
              </div>
             </div>
            <br/>
          </div>
            <hr id='separator_card'/>
        </div>

    ))
    }
    </div>
  </section>
)

const mapStateToProps = state => ({
  data_menu: state.data_menu
})

const mapDispatchToProps = dispatch => ({})


export default connect(mapStateToProps, mapDispatchToProps)(TargetList);

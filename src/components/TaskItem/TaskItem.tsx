import { Task } from '../../interfaces/Task';
import './TaskItem.css';
const TaskItem = ({ task }: { task: Task }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
      <div
        className="card text-dark card-has-bg click-col"
        style={{
          backgroundImage:
            'url("https://source.unsplash.com/600x900/?tech,street")',
        }}>
        <img
          className="card-img d-none"
          src="https://source.unsplash.com/600x900/?tech,street"
          alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?"
        />
        <div className="card-img-overlay d-flex flex-column">
          <div className="card-body">
            <small className="card-meta mb-2">Thought Leadership</small>
            <h4 className="card-title mt-0 ">
              <a className="text-dark" href="https://creativemanner.com">
                Web Developmet Lorem Ipsum Sit Amet Consectetur dipisi?
              </a>
            </h4>
            <small>
              <i className="far fa-clock" /> October 15, 2020
            </small>
          </div>
          <div className="card-footer">
            <div className="media">
              <img
                className="mr-3 rounded-circle"
                src="https://assets.codepen.io/460692/internal/avatars/users/default.png?format=auto&version=1688931977&width=80&height=80"
                alt="Generic placeholder image"
                style={{ maxWidth: 50 }}
              />
              <div className="media-body">
                <h6 className="my-0 text-dark d-block">Oz Coruhlu</h6>
                <small>Director of UI/UX</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;

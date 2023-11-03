import { Element } from "react-scroll";

function MyProjects() {
  return (
    <>
      <Element name="projects" className="flex md:flex-col flex-wrap">
        <section id="projects" className="flex md:flex-col flex-wrap">
          <h1 className="text-4xl font-bold text-left mb-8">
            <span className="text-slate-600 font-mono"># </span>My Projects
          </h1>
          <div className="flex gap-10 flex-wrap justify-around">
            {/* Card 1 */}
            <div className=" md:w-1/3 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-gray-500 hover:translate-x-2 hover:translate-y-2 hover:duration-700  cursor-pointer">
              <img
                className="w-full"
                src="https://picsum.photos/300/300"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="md:w-1/3 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-gray-500 hover:translate-x-2 hover:translate-y-2 hover:duration-700 cursor-pointer">
              <img
                className="w-full"
                src="https://picsum.photos/150/150"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="md:w-1/3 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-gray-500 hover:translate-x-2 hover:translate-y-2 hover:duration-700 cursor-pointer">
              <img
                className="w-full"
                src="https://picsum.photos/200/200"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="md:w-1/3 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-gray-500 hover:translate-x-2 hover:translate-y-2 hover:duration-700 cursor-pointer">
              <img
                className="w-full"
                src="https://picsum.photos/100/100"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          </div>
        </section>
      </Element>
    </>
  );
}

export default MyProjects;

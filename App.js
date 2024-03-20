import './App.css';
import './output.css';
import Vovojuju from './vovojuju.jpg';

function App() {
  return (
    <div class="flex justify-center max-w-screen mx-0 my-auto px-10 py-10">
      <div className="lg:w-1/3 md:w-1/2 sm:w-100 bg-[#e8e6f4] rounded-lg overflow-hidden shadow-lg">
        <div className="flex justify-center p-5">
            <img src={Vovojuju} alt="" className="object-cover w-28 h-28 rounded-full border-[3px] border-zinc-400"/>
        </div>
        <div className="px-6 mt-0 py-2 text-center text-sm">
          <h3 className="font-bold text-lg">Vovó Juju</h3>
          <p className="p-5">Ela é muito bondosa e carinhosa, principalmente com o Irmão do Jorel, e tem uma ingenuidade quase infantil. No episódio "Jornada Matinal Implacável", por exemplo, ela rega um cacto para nascer uma flor. Muito dificilmente ela fica com raiva. Ela gosta muito de abacates, enchendo a geladeira com vários.</p>
          <span className="mt-10 font-xsm italic text-zinc-400">Come abacate, bem. Come. </span>
        </div>
        <div className="flex justify-center p-6">
            <button className="bg-[#5f5f5f] text-[#e8e6f4] py-[10px] px-6 rounded cursor-pointer hover:bg-[#3f3f3f]" >Veja mais</button>
        </div>
      </div>
    </div>
  );
}

export default App;

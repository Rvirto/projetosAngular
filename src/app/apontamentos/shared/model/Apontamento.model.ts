import { Funcionario } from './../../../funcionario/shared/model/Funcionario.model';
import { Atividades } from '../../../atividades/shared/model/Atividade.model';

export class Apontamento {
  public id: number;
  public atividade: Atividades = new Atividades();
  public dataInicio: string;
  public dataFim: string;
  public quantidadeHoras: number;
  public funcionario: Funcionario = new Funcionario();
}

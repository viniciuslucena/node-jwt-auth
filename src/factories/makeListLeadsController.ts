import { ListLeadersController } from '../application/controllers/ListLeadsController';

export function makeListLeadsController() {
  return new ListLeadersController();
}

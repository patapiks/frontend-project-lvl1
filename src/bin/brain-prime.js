#!/usr/bin/env node
import { game, greeting, prime } from '../index.js';

game(greeting('Answer "yes" if given number is prime. Otherwise answer "no".'), prime);
